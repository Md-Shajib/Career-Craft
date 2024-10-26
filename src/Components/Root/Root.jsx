import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div className="">
            <div className=" bg-green-50"><Header></Header></div>
            <Outlet></Outlet>
            <div className="bg-slate-800 "><Footer></Footer></div>
        </div>
    );
};

export default Root;