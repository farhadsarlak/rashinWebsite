import React, { useContext } from "react";
import { context } from "../context/theme/theme";
import "./Sidebar.css";
import { menuList } from "../menus/MenuList";
import { NavLink } from "react-router-dom";


const Sidebar = () => {

    const theme = useContext(context);
    const { handleCloseSidebar } = theme;

    return (
        <div className="sidebar">
            <div className="mobileMenuTopNav">
                <div className="mobileMenuIcons">
                    <i className="fa fa-user" aria-hidden="true" />
                    <i className="fa fa-lock" aria-hidden="true" />
                </div>
                <div className="telInsidebar">
                    <span>031-32118</span>
                    <i className="fa fa-phone" aria-hidden="true" />
                </div>
                <i
                    className="fa fa-times fa-lg px-10 closeIcon"
                    aria-hidden="true"
                    onClick={() => handleCloseSidebar()}
                />
            </div>
            <div className="mobileMenuItem">
                {
                    menuList.map(({ name, route, text }) =>
                        <NavLink
                            key={name}
                            to={route}
                            onClick={() => handleCloseSidebar()}
                        >
                            <li className="list-style-none">
                                {text}
                            </li>
                        </NavLink>
                    )
                }
            </div>
        </div>
    )
}

export default Sidebar;