// import { useAuth } from "../../hooks/useAuth";
import { Outlet } from "react-router-dom";
import Nav from './nav'
import Footer from './footer'
const Layout = () => {
    return (
        <div className="bg-gradient-to-b from-slate-800 via-purple-900 to-slate-900">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
};

export default Layout;