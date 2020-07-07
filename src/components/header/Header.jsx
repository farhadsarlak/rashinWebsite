import React from 'react';
import "./Header.css";
import Menus from '../menus/Menus';
import TopNav from '../topNav/TopNav';
import { useWindowSize } from '../../utils/useWindowSize';
import TabletMenu from '../menus/tabletMenu/TabletMenu';
import MobileMenu from '../menus/mobileMenu/MobileMenu';
import DesktopMenu from '../menus/desktopMenu/DesktopMenu';

export default function Header() {

    const size = useWindowSize();

    const renderSizeScreen = width => {
        if (width >= 970) {
            return <Menus />
        } else if (width >= 768 && width <= 969) {
            return <DesktopMenu />
        } else if (width >= 481 && width <= 767) {
            return <TabletMenu />
        } else if (width <= 480) {
            return <MobileMenu />
        }
    }

    return (
        <>
            <TopNav />
            <div className={"mainHeader backgroundMode"}>
                {
                    renderSizeScreen(size.width)
                }
            </div>
        </>
    )
}
