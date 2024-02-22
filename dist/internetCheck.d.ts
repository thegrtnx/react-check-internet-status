import React from "react";
import { ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
interface InternetCheckProps {
    position: ToastPosition;
    onlineMessage?: string;
    offlineMessage?: string;
}
declare const InternetStatus: React.FC<InternetCheckProps>;
export default InternetStatus;
