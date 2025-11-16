import React from "react";

// Định nghĩa các kiểu props cho Button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "danger";
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = "default",
    className = "",
    ...props
}) => {
    // Định nghĩa class CSS cơ sở
    const baseClasses =
        "px-4 py-2 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-grey-700 focus:ring-offset-2 transition-colors";

    // Định nghĩa class cho từng variant
    const variantClasses = {
        default: "bg-slate-300 hover:bg-gray-700 hover:text-white",
        danger: "bg-red-600 text-white hover:bg-red-400",
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
