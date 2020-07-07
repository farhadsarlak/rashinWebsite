import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import "./MobileMenu.css";
import { context } from '../../context/theme/theme';

export default function MobileMenu() {

    const themeContext = useContext(context);
    const { handleOpenSidebar } = themeContext;
    return (
        <div className="mobileMenu">
            <i
                className="fa fa-bars menuIcon fa-lg" aria-hidden="true"
                onClick={() => handleOpenSidebar()}
            />
            <div className="headerItem logo mobileLogo">
                <NavLink to="/">
                    <img className="logoImage" src="/assets/images/mainLogo.png" alt="rashinWeb" />
                </NavLink>
            </div>
            <i className="fa fa-question-circle-o fa-lg" aria-hidden="true" />

        </div>
    )
}
