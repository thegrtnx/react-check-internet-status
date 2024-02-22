"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
require("./style.css");
var InternetStatus = function (_a) {
    var position = _a.position, onlineMessage = _a.onlineMessage, offlineMessage = _a.offlineMessage;
    var handleToast = (0, react_1.useCallback)(function (type, customMessage) {
        react_toastify_1.toast.dismiss();
        var defaultMessage = type === "warning" ? "Internet Restored 🚀" : "No/Bad Internet Connection 😭";
        var message = customMessage || defaultMessage;
        react_toastify_1.toast[type](message, {
            position: position,
            autoClose: 3000,
            icon: false,
            closeButton: false,
            transition: react_toastify_1.Slide,
            hideProgressBar: true,
            theme: "colored",
        });
    }, [position]);
    var InternetRestored = (0, react_1.useCallback)(function () { return handleToast("warning", onlineMessage); }, [handleToast, onlineMessage]);
    var NoInternetConnection = (0, react_1.useCallback)(function () { return handleToast("error", offlineMessage); }, [handleToast, offlineMessage]);
    (0, react_1.useEffect)(function () {
        var handleOnlineEvent = function () { return InternetRestored(); };
        var handleOfflineEvent = function () { return NoInternetConnection(); };
        window.addEventListener("online", handleOnlineEvent);
        window.addEventListener("offline", handleOfflineEvent);
        return function () {
            window.removeEventListener("online", handleOnlineEvent);
            window.removeEventListener("offline", handleOfflineEvent);
        };
    }, [InternetRestored, NoInternetConnection]);
    return react_1.default.createElement(react_toastify_1.ToastContainer, null);
};
exports.default = InternetStatus;
