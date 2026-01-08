import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const MainLayOut = () => {
    return (
        <div className="">
            {/* navbar */}
            <NavBar/>
            {/* outlet */}
            <Outlet/>
            {/* footer */}
            <Footer/>
        </div>
    );
};

export default MainLayOut;