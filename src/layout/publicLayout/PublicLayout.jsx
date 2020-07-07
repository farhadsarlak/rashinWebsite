import React, { useEffect, useContext } from 'react';
import "./PublicLayout.css";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import { context } from '../../components/context/theme/theme';


export default function PublicLayout({ children }) {

    const themeContext = useContext(context);

    const { theme, openSidbar, handleCloseSidebar } = themeContext;

    useEffect(() => {
        const body = document.body;
        body.classList.remove("darkMode", "lightMode");
        if (theme === "light") {
            body.classList.add("lightMode");
        } else {
            body.classList.add("darkMode");
        }
    }, [theme]);

    return (
        <>
            {
                openSidbar && <Sidebar />
            }
            <div
                onClick={() => openSidbar && handleCloseSidebar()}
                className={`${openSidbar ? "onOpendSidebar" : ""}`}
            >
                <Header />
                <div
                    className="mainContainer"
                >
                    {children}
                </div>

                <Footer />
            </div>
        </>
    )
}
