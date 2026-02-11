import React, { useEffect, type JSX } from "react";
import { createPortal } from "react-dom";

type ModalType = "success" | "error" | "info";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    type?: ModalType;
    title?: string;
    description?: string | React.ReactNode;
    footer?: React.ReactNode;
}

const COLORS: Record<ModalType, string> = {
    success: "text-green-600",
    error: "text-red-600",
    info: "text-[#0088E7]",
};

const BG_COLORS: Record<ModalType, string> = {
    success: "bg-[#FFFFFF]",
    error: "bg-[#FFFFFF]",
    info: "bg-[#FFFFFF]",
};

const ICONS: Record<ModalType, JSX.Element> = {
    success: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    error: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M12 8v5m0 3v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    info: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
};

export const Modal: React.FC<ModalProps> = ({
    open,
    onClose,
    type = "info",
    title,
    description,
    footer,
}) => {
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    useEffect(() => {
        if (!open) return;
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = original;
        };
    }, [open]);

    if (!open) return null;

    return createPortal(
        <div
            aria-modal="true"
            role="dialog"
            className="fixed inset-0 z-50 flex items-center justify-center"
        >
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity"
                onClick={onClose}
            />

            <div
                className={`relative mx-4 w-full max-w-lg rounded-2xl shadow-2xl ${BG_COLORS[type]}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col items-start gap-3 p-6">
                    <div className="flex justify-between w-full items-center mb-5">
                        <div className={`${COLORS[type]} shrink-0`}>{ICONS[type]}</div>
                        <h3 className="text-2xl md:text-3xl font-bold leading-tight text-[#1C1917]">
                            {title ?? (type === "success" ? "Успех" : type === "error" ? "Ошибка" : "Информация")}
                        </h3>
                        <button
                            aria-label="Close"
                            onClick={onClose}
                            className="ml-3 text-[#0B0B0B80] hover:text-[#0B0B0B] transition"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1">
                        {description}
                    </div>


                </div>

                {footer && (
                    <div className="px-6 pb-6 pt-2 flex flex-wrap gap-3">
                        {footer}
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
};
