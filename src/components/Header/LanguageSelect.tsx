import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import RuFlagIcon from "../../assets/ru.svg?react";
import UzFlagIcon from "../../assets/uz.svg?react";

type Lang = "ru" | "uz";
type Variant = "desktop" | "mobile";

type Props = {
    variant?: Variant;         
    className?: string;        
};

export const LanguageSelect: React.FC<Props> = ({ variant = "desktop", className }) => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [lang, setLang] = useState<Lang>((i18n.language as Lang) || "ru");
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setLang((i18n.language as Lang) || "ru");
    }, [i18n.language]);

    useEffect(() => {
        if (variant !== "desktop") return; 
        const onDocClick = (e: MouseEvent) => {
            if (!ref.current?.contains(e.target as Node)) setIsOpen(false);
        };
        document.addEventListener("click", onDocClick);
        return () => document.removeEventListener("click", onDocClick);
    }, [variant]);

    const handleSelect = async (l: Lang) => {
        if (l === lang) return;
        await i18n.changeLanguage(l);
        setLang(l);
        setIsOpen(false);
    };

    if (variant === "mobile") {
        // Мобильная версия
        return (
            <div
                className={`flex items-center gap-3 ${className ?? ""}`}
                role="radiogroup"
                aria-label="Select language"
            >
                <button
                    type="button"
                    role="radio"
                    aria-checked={lang === "ru"}
                    onClick={() => handleSelect("ru")}
                    className={`p-4 rounded-2xl grid place-items-center 
            transition border 
            ${lang === "ru" ? "border-[#1754F1]" : "border-[#E7EEF5]"}
            bg-white shadow-sm focus:outline-none focus:ring-0.5 focus:ring-[#1754F1]`}
                >
                    <span className="sr-only">Русский</span>
                    <RuFlagIcon className="w-8 h-8 rounded-lg" />
                </button>

                <button
                    type="button"
                    role="radio"
                    aria-checked={lang === "uz"}
                    onClick={() => handleSelect("uz")}
                    className={`p-4 rounded-2xl grid place-items-center 
            transition border 
            ${lang === "uz" ? "border-[#1754F1]" : "border-[#E7EEF5]"}
            bg-white shadow-sm focus:outline-none focus:ring-0.5 focus:ring-[#1754F1]`}
                >
                    <span className="sr-only">Oʻzbekcha</span>
                    <UzFlagIcon className="w-8 h-8 rounded-lg" />
                </button>
            </div>
        );
    }

    // Desktop
    const Flag = lang === "ru" ? RuFlagIcon : UzFlagIcon;

    return (
        <div className={`relative ${className ?? ""}`} ref={ref}>
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center gap-2 border border-[#1754F1] rounded-lg px-2.75 py-2.75 bg-white text-[#1754F1] font-semibold text-sm"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <Flag className="w-8 h-8" />
                <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div
                    className="absolute left-0 mt-2 w-full bg-white border border-[#1754F1] rounded-[12px] z-10 shadow-lg overflow-hidden"
                    role="listbox"
                >
                    <button
                        onClick={() => handleSelect("ru")}
                        role="option"
                        aria-selected={lang === "ru"}
                        className="flex items-center gap-2 w-full text-left px-2.75 py-2.75 hover:bg-[#ECF7FE] text-[#1754F1]"
                    >
                        <RuFlagIcon className="w-6 h-6" /> RU
                    </button>
                    <button
                        onClick={() => handleSelect("uz")}
                        role="option"
                        aria-selected={lang === "uz"}
                        className="flex items-center gap-2 w-full text-left px-2.75 py-2.75 hover:bg-[#ECF7FE] text-[#1754F1]"
                    >
                        <UzFlagIcon className="w-6 h-6" /> UZ
                    </button>
                </div>
            )}
        </div>
    );
};
