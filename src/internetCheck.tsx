import React, { useEffect, useCallback } from "react";
import { Slide, ToastContainer, toast, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

interface InternetCheckProps {
	position: ToastPosition;
	onlineMessage?: string;
	offlineMessage?: string;
}

const InternetStatus: React.FC<InternetCheckProps> = ({ position, onlineMessage, offlineMessage }) => {
	const handleToast = useCallback(
		(type: "warning" | "error", customMessage?: string) => {
			toast.dismiss();

			const defaultMessage = type === "warning" ? "Internet Restored 🚀" : "No/Bad Internet Connection 😭";
			const message = customMessage || defaultMessage;

			toast[type](message, {
				position: position,
				autoClose: 3000,
				icon: false,
				closeButton: false,
				transition: Slide,
				hideProgressBar: true,
				theme: "colored",
			});
		},
		[position]
	);

	const InternetRestored = useCallback(() => handleToast("warning", onlineMessage), [handleToast, onlineMessage]);
	const NoInternetConnection = useCallback(() => handleToast("error", offlineMessage), [handleToast, offlineMessage]);

	useEffect(() => {
		const handleOnlineEvent = () => InternetRestored();
		const handleOfflineEvent = () => NoInternetConnection();

		window.addEventListener("online", handleOnlineEvent);
		window.addEventListener("offline", handleOfflineEvent);

		return () => {
			window.removeEventListener("online", handleOnlineEvent);
			window.removeEventListener("offline", handleOfflineEvent);
		};
	}, [InternetRestored, NoInternetConnection]);

	return <ToastContainer />;
};

export default InternetStatus;
