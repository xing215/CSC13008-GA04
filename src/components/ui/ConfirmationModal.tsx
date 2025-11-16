import React from "react";

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    message: string;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title = "Confirmation",
    message,
}) => {
    if (!isOpen) return null;

    // Hàm xử lý xác nhận và đóng modal
    const handleConfirm = () => {
        onConfirm();
        onClose();
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black opacity-35 z-40 duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                           bg-white p-4 rounded-lg shadow-lg w-full max-w-sm z-50 
                           transition-all duration-300"
            >
                {/* Header */}
                <div className="flex items-center mb-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                        />
                    </svg>
                    <p className="ml-4 font-bold">{title}</p>
                </div>

                {/* Message */}
                <p
                    id="notification-message"
                    className="flex items-start gap-3 p-3 mb-4 rounded-md border border-gray-100 bg-gray-50 shadow-inner"
                >
                    <span className="text-gray-800 text-sm leading-relaxed">
                        {message}
                    </span>
                </p>

                {/* Buttons */}
                <div className="flex justify-end">
                    <button
                        id="notification-cancel-btn"
                        className="w-[68px] px-3 py-1 bg-white border bg-opacity-20 text-sm text-blue-600 rounded-md hover:bg-slate-100 mr-2"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        id="notification-OK-btn"
                        className="w-[68px] px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-opacity-80"
                        onClick={handleConfirm}
                    >
                        OK
                    </button>
                </div>
            </div>
        </>
    );
};
