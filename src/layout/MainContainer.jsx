import React from "react";
import { Switch, Route } from "react-router";
import PublicLayout from "./publicLayout/PublicLayout";
import ThemeContext from "../components/context/theme/ThemeContext";

// pages
import Consultation from "../pages/consultation/Consultation";
import ContactUs from "../pages/contactUs/ContactUs";
import HomePage from "../pages/homePage/HomePage";
import Packages from "../pages/packages/Packages";
import AboutUs from "../pages/aboutUs/AboutUs";
import Portfolio from "../pages/portfolio/Portfolio";
import BuySite from "../pages/buySite/BuySite";
import LoginRegister from "../pages/loginRegister/LoginRegister";
import NotFound from "../pages/404/NotFound";

const MainContainer = () => {

    return (
        <Switch>
            <Route path={["/"]}>
                <ThemeContext>
                    <PublicLayout>

                        {/* define Routes */}

                        <Switch>

                            {/* consultation */}
                            <Route
                                path="/consultation"
                                render={() => <Consultation />}
                            />

                            {/* ContactUs */}
                            <Route
                                path="/ContactUs"
                                render={() =>
                                    <ContactUs />
                                }
                            />

                            {/* AboutUs */}
                            <Route
                                path="/aboutUs"
                                render={() =>
                                    <AboutUs />
                                }
                            />

                            {/* portfolio */}
                            <Route
                                path="/portfolio"
                                render={() => <Portfolio />}
                            />

                            {/* packages Page */}
                            <Route
                                path="/packages"
                                render={() =>
                                    <Packages />
                                }
                            />

                            {/* BuySite Page */}
                            <Route
                                path="/buySite"
                                render={() =>
                                    <BuySite />
                                }
                            />

                            {/* LoginRegister Page */}
                            <Route
                                path="/loginRegister"
                                render={() =>
                                    <LoginRegister />
                                }
                            />

                            {/* Home Page */}
                            <Route
                                exact
                                path="/"
                                render={() => <HomePage />}
                            />

                            {/* NotFound Page */}
                            <Route
                                path="*"
                                component={NotFound}
                            />

                        </Switch>
                    </PublicLayout>
                </ThemeContext>
            </Route>
        </Switch>
    )
}

export default MainContainer;