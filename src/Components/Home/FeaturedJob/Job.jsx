import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { LuCircleDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";



const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className="border border-gray-300 p-7 text-left rounded-md w-full bg-gray-50">
            <div className="w-2/5 mb-3 h-8">
                <img className="w-full h-full" src={logo} alt="" />
            </div>
            <div>
                <h2 className="text-xl lg:text-2xl font-bold my-1 lg:my-2">{job_title}</h2>
                <p className="text-lg lg:text-xl my-1 lg:my-2">{company_name}</p>
                <div className="flex my-2">
                    <p className="border border-[#7E90FE] px-5 py-1 rounded-sm text-[#7c4eff]">{remote_or_onsite}</p>
                    <p className="border border-[#7E90FE] px-5 py-1 rounded-sm ml-3 text-[#7c4eff]">{job_type}</p>
                </div>
                <div className="block lg:flex my-3">
                    <div className="flex items-center mr-6 mb-1 lg:mb-0">
                        <FaLocationDot />
                        <p className="ml-2">{location}</p>
                    </div>
                    <div className="flex items-center">
                        <LuCircleDollarSign />
                        <p className="ml-2">Salary: {salary}</p>
                    </div>
                </div>
                <div className="text-center md:text-left">
                    <Link to={`/details/${id}`}><button className="py-2 px-4 lg:py-3 lg:px-5 rounded-md text-white tracking-wider font-bold bg-gradient-to-r from-[#7e90fe] to-[#9873ff]">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired,
}
export default Job;