import { Outlet } from "react-router-dom";
import Footer from "../Compunents/Footer/Footer";
import Navbar2 from "../Compunents/Header/NavBar/Navbar2";
// import NavBar from "../Compunents/Header/NavBar/NavBar";
// import Navbar2 from "../Compunents/Header/NavBar/Navbar2";





const Roots = () => {
    return (
        <div>
            <div className="max-w-[1600px] mx-auto">
           {/* <NavBar></NavBar> */}
           <Navbar2></Navbar2>
            <div>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Roots;