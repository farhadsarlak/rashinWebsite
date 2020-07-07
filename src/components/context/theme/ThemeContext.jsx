import React, { useState } from "react";

import { context } from "./theme";
const ThemeContext = ({ children }) => {

    const [theme, setTheme] = useState("light");
    const [activeMenu, setActiveMenu] = useState("mainMenu");
    const [openSidbar, setOpenSidebar] = useState(false);

    const handleChangeActivePage = (pageName) => setActiveMenu(pageName);
    const handleOpenSidebar = () => setOpenSidebar(true);
    const handleCloseSidebar = () => setOpenSidebar(false);

    return (
        <context.Provider value={{
            theme,
            setTheme,
            activeMenu,
            handleChangeActivePage,
            openSidbar,
            handleOpenSidebar,
            handleCloseSidebar
        }}>
            {children}
        </context.Provider>
    )
}

export default ThemeContext;