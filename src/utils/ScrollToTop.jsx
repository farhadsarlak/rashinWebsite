import { useEffect } from "react";
import { withRouter } from "react-router";


const ScrollToTop = ({ children, history }) => {


    useEffect(() => {
        const unListen = history.listen(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        });
        return () => {
            unListen();
        }
    }, [history]);
    return children;
}

export default withRouter(ScrollToTop);