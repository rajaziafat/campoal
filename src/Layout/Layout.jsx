import {  useLocation } from "react-router-dom";
import Bar from "../Components/Bar";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Routers from "../Routes/Routers";

function Layout() {
    const location = useLocation();

    // Define an array of paths where Navbar, Footer, and Bar should not be rendered
    const pathsWithoutNavbarFooterBar = ["/sign-in", "/register"];

    // Function to check if the current path is in the array
    const shouldRenderNavbarFooterBar = !pathsWithoutNavbarFooterBar.includes(location.pathname);

    return (
        <>
            {shouldRenderNavbarFooterBar && (
                <>
                    <Bar  />
                    <Navbar />
                </>
            )}
            <div>
                <Routers />
            </div>
            {shouldRenderNavbarFooterBar && <Footer />}
        </>
    );
}

export default Layout;
