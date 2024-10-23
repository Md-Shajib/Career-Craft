import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJob = () => {
    const [jobs, setJobs] = useState([])
    useEffect( ()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    } , [])
    return (
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="text-5xl font-bold my-4">Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-4 place-items-center">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJob;