import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { createContext, useEffect, useState } from "react";

export const jobContext = createContext()

const Root = () => {
    const [jobs, setJobs] = useState([])
    useEffect( ()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    } , [])

    return (
        <div className="">
            <div className=" bg-green-50"><Header></Header></div>
            <jobContext.Provider value={[jobs, setJobs]}>
                <div>
                    <Outlet></Outlet>
                </div>
            </jobContext.Provider>
            <div className="bg-slate-800 "><Footer></Footer></div>
        </div>
    );
};

export default Root;