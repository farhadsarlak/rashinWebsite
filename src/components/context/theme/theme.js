import { createContext } from "react";


export const context = createContext({
    theme: "",
    setTheme: () => { },
    activeMenu: "",
    setActiveMenu: () => { },
    handleChangeActivePage: () => { },
    openSidbar: false,
    setOpenSidebar: () => { },
    handleSidebar: () => { },
    handleOpenSidebar: () => { },
    handleCloseSidebar: () => { }
});