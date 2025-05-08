import Navbar from "../components/Navbar.tsx";
import {Outlet, ScrollRestoration} from "react-router-dom";
import Footer from "../components/Footer.tsx";
import TopBar from "../components/TopBar.tsx";

function MainLayout() {
    return (
        <>
            <ScrollRestoration/>
            <TopBar/>
            <Navbar />
                <main>
                    <Outlet/>
                </main>
            <Footer/>
        </>
    );
}

export default MainLayout;