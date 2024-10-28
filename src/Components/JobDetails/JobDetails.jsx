import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsBagPlus } from "react-icons/bs";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/LocalStorage";
import JobDetailsBaner from "./JobDetailsBaner";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id);

    const job = jobs.find(job => job.id === idInt)
    const {job_title, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information} = job;

    const notice = () => {
        saveJobApplication(idInt)
        toast("Applied")
    }
    
    return (
        <div className="">
            <JobDetailsBaner></JobDetailsBaner>

            <div className=" md:flex w-full">
                <div className="md:w-3/5 md:p-1 lg:p-2 mx-2 mb-3">
                    <p className="mb-2 text-justify"><span className="font-bold text-xl ">Job Description: </span><span className="text-base font-normal">{job_description}</span>
                    </p>
                    <p className="font-bold text-xl py-2 text-justify"><span>Job Responsiblity:</span> <span className="text-base font-normal">{job_responsibility}</span></p>
                    <p className="font-bold text-xl py-2"><span>Educational Requirements:</span> <span className="text-base font-normal">{educational_requirements}</span></p>
                    <p className="font-bold text-xl py-2">Experience: <span className="text-base font-normal">{experiences}</span></p>
                </div>
                <div className="md:w-2/5 p-3 md:p-8 bg-green-100 m-3 rounded-xl leading-relaxed flex flex-col">
                    <div className="flex-grow">
                        <p className="font-bold text-xl">More Details</p> <hr className="my-2"/>
                        <div className="flex items-center">
                            <p className="text-blue-800 mr-2"><AiOutlineDollarCircle /></p>
                            <p><span className="font-bold">Salary:</span> {salary} per month</p>
                        </div>
                        <div className="flex items-center pb-4">
                            <p className="text-blue-800 mr-2"><BsBagPlus /></p>
                            <p className=""><span className="font-bold">Job Title:</span> {job_title}</p>
                        </div>
                        <p className="py-2"><span className="font-bold text-xl">Contact Inoformation:</span> </p> <hr className="mb-2"/>
                        <div className="flex items-center">
                            <p className="text-blue-800 mr-2"><MdOutlinePhone /></p>
                            <p><span className="font-bold">Phone:</span> {contact_information.phone}</p>
                        </div>
                        <div className="flex items-center">
                            <p className="text-blue-800 mr-2"><MdOutlineEmail /></p>
                            <p><span className="font-bold">Email:</span> {contact_information.email}</p>
                        </div>
                        <div className="flex items-center">
                            <p className="text-blue-800 mr-2"><IoLocationOutline /></p>
                            <p><span className="font-bold">Address:</span> {contact_information.address}</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <Link>
                            <button onClick={notice} className="w-full py-2 px-5 rounded-md text-white tracking-wider font-bold bg-gradient-to-r from-[#7e90fe] to-[#9873ff]">Apply Now</button>
                            <ToastContainer></ToastContainer>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;