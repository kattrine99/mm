import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./scrollToTop";

export function RootLayout() {
    return (
        <>
            <ScrollToTop />
            <Outlet />
        </>
    );
}