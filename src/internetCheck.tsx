import React, { useEffect, useCallback } from "react";
import { Slide, ToastContainer, toast, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

interface InternetCheckProps {
	position: ToastPosition;
}

const InternetStatus: React.FC<InternetCheckProps> = ({ position }) => {
	const handleToast = useCallback(
		(message: string, type: "warning" | "error") => {
			toast.dismiss();

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

	const InternetRestored = useCallback(() => handleToast("Internet Restored 🚀", "warning"), [handleToast]);
	const NoInternetConnection = useCallback(() => handleToast("No/Bad Internet Connection 😭", "error"), [handleToast]);

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
