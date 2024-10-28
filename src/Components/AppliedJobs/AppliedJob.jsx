import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { LuCircleDollarSign } from "react-icons/lu";


const AppliedJob = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className="m-3">
            <div className="md:flex w-full border rounded-md border-slate-100 mb-3">
                <div className="bg-gray-100 w-full md:w-1/5 flex justify-center items-center p-5 md:p-8">
                    <img src={logo} alt="" />
                </div>
                <div className="flex-grow p-3 md:p-5 bg-gray-50">
                    <h2 className="font-bold text-xl">{job_title}</h2>
                    <p className="font-bold text-gray-500 ">{company_name}</p>
                    <div className="flex my-2">
                        <p className="border border-[#7E90FE] px-5 py-1 rounded-sm text-[#7c4eff]">{remote_or_onsite}</p>
                        <p className="border border-[#7E90FE] px-5 py-1 rounded-sm ml-3 text-[#7c4eff]">{job_type}</p>
                    </div>
                    <div className="md:flex">
                        <div className="flex items-center mr-6 mt-3 md:mt-0">
                            <FaLocationDot />
                            <p className="ml-2">{location}</p>
                        </div>
                        <div className="flex items-center mt-1 md:mt-0">
                            <LuCircleDollarSign />
                            <p className="ml-2">Salary: {salary}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center p-2 md:p-5 bg-gray-50">
                    <button className="py-2 px-4 rounded-md text-white tracking-wider font-bold bg-gradient-to-r from-[#7e90fe] to-[#9873ff]">See Details</button>
                </div>
            </div>
        </div>
    );
};

AppliedJob.propTypes = {
    job: PropTypes.object.isRequired,
}
export default AppliedJob;