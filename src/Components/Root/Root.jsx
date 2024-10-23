import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div>
            <div className="container bg-green-50"><Header></Header></div>
            <Outlet></Outlet>
            <div className="bg-slate-800 container"><Footer></Footer></div>
        </div>
    );
};

export default Root;