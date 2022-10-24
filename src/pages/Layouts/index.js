// import { useAuth } from "../../hooks/useAuth";
import { Outlet } from "react-router-dom";
import Nav from '../../components/nav'
const Layout = () => {
    return (
        <div className="bg-[#dcdcdc]">
            <Nav />
            <Outlet />
        </div>
    )
};

export default Layout;