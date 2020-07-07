import React, { useContext } from 'react';
import "./Menus.css"
import { NavLink } from 'react-router-dom';
import { context } from '../context/theme/theme';
import { menuList } from "./MenuList";

export default function Menus() {

    const themeContext = useContext(context);

    const { activeMenu, handleChangeActivePage } = themeContext;

    return (
        <>
            <div className="headerItem logo">
                <NavLink to="/">
                    <figure className="logoImageWrapper">
                        <img className="logoImage shine-me" src="/assets/images/mainLogo.png" alt="rashinWeb" />
                    </figure>
                </NavLink>
            </div>
            <div className="headerItem menu">
                <div className="mainMenu">
                    <ul className="menuItems">
                        {
                            menuList.map(({ route, name, text, submenu }) =>
                                <NavLink
                                    key={name}
                                    to={route}
                                    onClick={() => handleChangeActivePage(name)}
                                >
                                    <li
                                        className={`
                                            ${activeMenu === name ? "activeMenu" : ""}
                                        `}>
                                        {text}

                                        {/* {submenu &&
                                            submenu.map(item =>
                                                <div key={item.name} className="submenus">
                                                    <div className="submenusItem">
                                                        {item.name}
                                                        {console.log(submenu)}
                                                    </div>
                                                </div>
                                            )
                                        } */}

                                    </li>
                                </NavLink>
                            )
                        }
                    </ul>
                </div >
            </div>
        </>
    )
}
