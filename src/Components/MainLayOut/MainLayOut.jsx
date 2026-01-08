import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const MainLayOut = () => {
    return (
        <div className="">
            {/* navbar */}
            <div>
            <NavBar/>
            </div>
            {/* outlet */}
            <div className="max-w-7xl min-h-[calc(100vh-290px)] mx-auto px-6 py-10">
            <Outlet/>
            </div>
            {/* footer */}
            <Footer/>
        </div>
    );
};

export default MainLayOut;