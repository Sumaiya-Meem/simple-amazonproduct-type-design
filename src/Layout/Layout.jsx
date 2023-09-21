import { Outlet} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="min-h-screen">
            <Outlet />
            </div>
           
            <Footer></Footer>
        </div>

    );
};

export default Layout;