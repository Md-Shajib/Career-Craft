import { useContext, useState } from "react";
import Job from "./Job";
import { jobContext } from "../../Root/Root";

const FeaturedJob = () => {

    const [jobs, ] = useContext(jobContext)

    // const [jobs, setJobs] = useState([])
    // useEffect( ()=>{
    //     fetch('jobs.json')
    //     .then(res => res.json())
    //     .then(data => setJobs(data))
    // } , [])

    const [dataLength, setDataLength] = useState(4)

    return (
        <div className="">
            <div className="text-center mb-5">
                <h2 className="text-xl md:text-2xl lg:text-5xl font-bold my-4">Featured Jobs</h2>
                <p className="text-sm md:text-base lg:text-xl mb-2 mx-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="m-5 grid md:grid-cols-2 sm:grid-cols-1 gap-5 mt-4 place-items-center">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`text-center ${dataLength === jobs.length ? 'hidden':''}`}>
                <button onClick={()=>setDataLength(jobs.length)} className="py-2 px-4 lg:py-3 lg:px-5 rounded-md text-white tracking-wider font-bold bg-gradient-to-r from-[#7e90fe] to-[#9873ff] mb-3 lg:my-6">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJob;