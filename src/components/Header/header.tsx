import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Modal } from "../index";
import "./Header.css";
import { useTranslation } from "react-i18next";
import { LanguageSelect } from "./LanguageSelect";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuPhone } from "react-icons/lu";

export const Header: React.FC = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [comingOpen, setComingOpen] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        const applyLock = () => {
            const sw = window.innerWidth - root.clientWidth;
            document.body.classList.add("no-scroll");
            document.body.style.paddingRight = sw ? `${sw}px` : "";
        };
        const removeLock = () => {
            document.body.classList.remove("no-scroll");
            document.body.style.paddingRight = "";
        };
        if (open) {
            applyLock();
        } else {
            removeLock();
        }
        return removeLock;
    }, [open]);


    const scrollToFooter = (e: React.MouseEvent) => {
        e.preventDefault();
        document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    return (
        <header className="sticky top-0 z-40 bg-white shadow-lg/60 shadow-[#838BB429]">
            <div className="flex items-center justify-between py-[clamp(10px,4vw,16px)] px-4 sm:px-6 md:px-8 min-[1060px]:px-10 xl:px-15 2xl:px-25">
                <div className="icon">
                    <Link to={"/about_platform"}>
                        {/* <img src="/images/logo-da.svg" alt="logo" className="h-15 w-15" /> */}
                        <p className="text-2xl text-[#1754F1]">LOGO</p>
                    </Link>
                </div>

                {/* DESKTOP */}
                <div className="hidden min-[1160px]:flex items-center gap-[clamp(12px,2.2vw,25.5px)]">
                    <nav className="flex items-center gap-10">
                        <Link to={"/about_platform"} className="font-vela_sans text-lg hover:text-[#1754F1] transition duration-600 ease-in-out">
                            {t("header.about")}
                        </Link>
                        <Link to={"/for_partners"} className="font-vela_sans text-lg hover:text-[#1754F1] transition duration-600 ease-in-out">
                            {t("header.partners")}
                        </Link>
                        
                        <a
                            href="#footer"
                            onClick={scrollToFooter}
                            className="font-vela_sans text-lg hover:text-[#1754F1] transition duration-600 ease-in-out"
                        >
                            {t("header.contacts")}
                        </a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <a
                            href="tel:+998555181991"
                            className="border-1 py-3 px-6 rounded-lg text-lg font-medium text-[#1754F1] border-[#1754F1]"
                        >
                            +998 (55) 518-19-91
                        </a>
                        <LanguageSelect variant="desktop" />

                    </div>
                </div>

                {/* MOBILE & TABLET <1090px */}
                <div className="min-[1160px]:hidden flex items-center gap-3">
                    <a
                        href="tel:+998555181991"
                        className="inline-flex items-center justify-center border text-[#1754F1] border-[#1754F1] hover:bg-[#1754F1] hover:text-white transition duration-300 ease-in-out rounded-lg w-12 h-12"
                        aria-label="Call"
                    >
                        <LuPhone  className="w-6 h-6" />
                    </a>

                    <button
                        type="button"
                        className="inline-flex items-center justify-center w-12 h-12 rounded-lg border text-[#1754F1] border-[#1754F1] hover:bg-[#1754F1] hover:text-white transition duration-300 ease-in-out"
                        aria-label={t("header.open_menu") ?? "Open menu"}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        onClick={() => setOpen(true)}
                    >
                        <RxHamburgerMenu className="w-6 h-6"/>
                    </button>
                </div>
            </div>
            <div
                id="mobile-menu"
                className={`fixed inset-0 overflow-hidden min-[1160px]:hidden z-50 ${open ? "" : "pointer-events-none"}`}
            >
                <div
                    className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setOpen(false)}
                />
                {/* panel */}
                <aside
                    className={`absolute right-0 top-0 h-full w-[85%] max-w-[300px] bg-white shadow-xl transition-transform ${open ? "translate-x-0" : "translate-x-full"
                        }`}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="flex items-center justify-between p-4 ">
                        {/*<Link to="/main" onClick={() => setOpen(false)}>
                            <img src="/images/logo-da.svg" alt="Logo" className="h-15 w-15" />
                        </Link>*/}
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            aria-label={t("header.close_menu") ?? "Close menu"}
                            className="inline-flex items-center justify-center w-12 h-12 rounded-md border text-[#1754F1] border-[#1754F1] hover:bg-[#1754F1] hover:text-white transition duration-300 ease-in-out"
                        >
                           <IoClose className="w-6 h-6 "/>
                        </button>
                    </div>

                    <nav className="flex flex-col p-4 gap-2 text-lg">
                        <Link to="/about_platform" onClick={() => setOpen(false)} className="py-3 px-2 rounded hover:bg-[#F5FBFF] hover:text-[#1754F1] transition">
                            {t("header.about")}
                        </Link>
                        <Link to="/for_partners" onClick={() => setOpen(false)} className="py-3 px-2 rounded hover:bg-[#F5FBFF] hover:text-[#1754F1] transition">
                            {t("header.partners")}
                        </Link>
                        <a href="#footer" onClick={scrollToFooter} className="py-3 px-2 rounded hover:bg-[#F5FBFF] hover:text-[#1754F1] transition">
                            {t("header.contacts")}
                        </a>
                    </nav>

                    <div className="mt-auto p-4">
                        <div className="flex flex-col gap-3">
                            <LanguageSelect variant="mobile" />
                        </div>
                    </div>
                </aside>
                <Modal
                    open={comingOpen}
                    onClose={() => setComingOpen(false)}
                    type="info"
                    title={t("header.comingSoon.title")}
                    description={
                        <p className="text-base leading-6 text-[#1C1917]">
                            {t("header.comingSoon.description")}
                        </p>
                    }
                    footer={
                        <button
                            onClick={() => setComingOpen(false)}
                            className="ml-auto w-full inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[#1754F1] text-[#1754F1] hover:bg-[#ECF7FE] transition"
                        >
                            {t("header.common.ok")}
                        </button>
                    }
                />
            </div>
        </header>
    );
};
