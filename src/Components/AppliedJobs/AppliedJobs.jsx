import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/LocalStorage";
import JobDetailsBaner from "../JobDetails/JobDetailsBaner";
import AppliedJob from "./AppliedJob";
import { IoIosArrowDown } from "react-icons/io";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const[open, setOpen] = useState(false)
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleFilter = filter => {
        setOpen(false)
        if(filter === 'all'){
            setDisplayJobs(appliedJobs)
        }else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs);
        }else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs);
        }
    }
    useEffect(()=>{
        const storedIds = getStoredJobApplication();
        if(jobs.length){
            // const appliedIds = jobs.filter(job => storedIds.includes(job.id));

            const appliedIds = [];
            for(const id of storedIds){
                const job = jobs.find(job => job.id === id)
                if(job) appliedIds.push(job)
            }
            setAppliedJobs(appliedIds)
            setDisplayJobs(appliedIds)
            // console.log(jobs, storedIds, appliedIds)
        }
    },[jobs])
    return (
        <div className="">
            <JobDetailsBaner></JobDetailsBaner>
            <div className="">
                <div className="text-right">
                    <div className="dropdown">
                        <div onClick={()=>setOpen(true)} tabIndex={0} role="button" className="btn m-1">Filter By <IoIosArrowDown /></div> 
                        <ul tabIndex={0} className={`dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow ${open ? 'visible':'hidden'}`}>
                            <li onClick={()=>handleFilter('all')}><a>All</a></li>
                            <li onClick={()=>handleFilter('remote')}><a>Remote</a></li>
                            <li onClick={()=>handleFilter('onsite')}><a>OnSite</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                {
                    displayJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;