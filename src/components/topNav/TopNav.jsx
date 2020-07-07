import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { context } from "../context/theme/theme";


const TopNav = () => {

    const themeContext = useContext(context);

    const {
        setTheme,
        theme
    } = themeContext;

    return (
        <div className="topNavbar">
            <div
                className="changeMode"
                onClick={() =>
                    theme === "light" ?
                        setTheme("dark") :
                        setTheme("light")
                }
            >
                {
                    theme === "light" ?
                        <img className="modeImage" src="./assets/images/night-mode.svg" alt="night-mode" />
                        :
                        <img className="modeImage" src="./assets/images/day-mode.svg" alt="light-mode" />
                }
            </div>
            <div className="loginRegister">
                <NavLink to="/loginRegister">
                    ورود / خروج
                </NavLink>
            </div>

        </div>
    )
}

export default TopNav;