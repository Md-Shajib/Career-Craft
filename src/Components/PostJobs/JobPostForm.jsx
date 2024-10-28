import { useContext } from "react";
import useInputState from "../../Hooks/inputState";
import { jobContext } from "../Root/Root"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobPostForm = () => {

    const [jobs, setJobs] = useContext(jobContext)

    // console.log(jobs)

    const [jobTitle, handleJobTitle] = useInputState('');
    const [companyName, handleCompanyName] = useInputState('');
    const [location, handleLocation] = useInputState('');
    const [Experience, handleExperience] = useInputState('');
    const [Logo, handleLogo] = useInputState('');
    const [Phone, handlePhone] = useInputState('');
    const [Email, handleEmail] = useInputState('');
    const [Address, handleAddress] = useInputState('');
    const [jobType, handleJobType] = useInputState('');
    const [workType, handleWorkType] = useInputState('');
    const [salary, handleSalary] = useInputState('');
    const [description, handleDescription] = useInputState('');
    const [Responsibility, handleResponsibility] = useInputState('');
    const [Requirements, handleRequirements] = useInputState('');

    const newJobPost = {
        "id": '',
        "logo": Logo,
        "job_title": jobTitle,
        "company_name": companyName,
        "remote_or_onsite": jobType,
        "location": location,
        "job_type": workType,
        "salary": salary,
        "job_description": description,
        "job_responsibility": Responsibility,
        "educational_requirements": Requirements,
        "experiences": Experience,
        "contact_information": {
            "phone": Phone,
            "email": Email,
            "address": Address,
        }
    }


    const handleSubmit = e => {
        e.preventDefault();
        console.log(jobs)
        newJobPost.id = jobs.length + 1;
        setJobs([...jobs, newJobPost])

        console.log(jobs)
        toast("Posted..! Go to home to see.");
    }

    return (
        <div>
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-5">
                <h2 className="text-2xl font-bold mb-6 text-center">Post a Job</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Job Title */}
                    <div>
                        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title</label>
                        <input
                            id="jobTitle"
                            onChange={handleJobTitle}
                            type="text"
                            name="jobTitle"
                            value={jobTitle}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter job title"
                            required />
                    </div>

                    {/* Company Name */}
                    <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                        <input
                            id="companyName"
                            value={companyName}
                            onChange={handleCompanyName}
                            type="text"
                            name="companyName"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter company name"
                            required />
                    </div>

                    {/* Location */}
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            id="location"
                            value={location}
                            onChange={handleLocation}
                            type="text"
                            name="location"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter location"
                            required />
                    </div>

                    {/* Experience */}
                    <div>
                        <label htmlFor="Experience" className="block text-sm font-medium text-gray-700">Experience</label>
                        <input
                            id="Experience"
                            value={Experience}
                            onChange={handleExperience}
                            type="text"
                            name="Experience"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter experience"
                            required />
                    </div>

                    {/* Logo */}
                    <div>
                        <label htmlFor="Logo" className="block text-sm font-medium text-gray-700">Logo Url</label>
                        <input
                            type="text"
                            id="Logo"
                            value={Logo}
                            onChange={handleLogo}
                            name="Logo"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter logo url"
                            required />
                    </div>

                    {/* Contact Info */}
                    <div>
                        <label htmlFor="Contact" className="block text-sm font-medium text-gray-700">Contact</label>
                        <input
                            type="text"
                            id="Phone"
                            name="Phone"
                            value={Phone}
                            onChange={handlePhone}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter phone number"
                            required />

                        <input
                            type="email"
                            id="Email"
                            name="Email"
                            value={Email}
                            onChange={handleEmail}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter email"
                            required />
                        
                        <input
                            type="text"
                            id="Address"
                            name="Address"
                            value={Address}
                            onChange={handleAddress}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter address"
                            required />
                    </div>

                    {/* Job Type */}
                    <div>
                        <label htmlFor="jobType" className="block text-sm font-medium text-gray-700">Job Type</label>
                        <select
                            name="jobType"
                            id="jobType"
                            value={jobType} // Bind the state to the select's value
                            onChange={handleJobType}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required >
                            <option value="" disabled>Select job type</option>
                            <option value="Onsite">Onsite</option>
                            <option value="Remote">Remote</option>
                        </select>
                        </div>

                    {/* Work Type */}
                    <div>
                        <label htmlFor="workType" className="block text-sm font-medium text-gray-700">Work Type</label>
                        <select 
                            name="workType"
                            id="workType"
                            value={workType}
                            onChange={handleWorkType}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required >
                                <option value="" disabled>Select work type </option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                        </select>
                    </div>

                    {/* Salary */}
                    <div>
                        <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
                        <input
                            type="text"
                            id="salary"
                            name="salary"
                            value={salary}
                            onChange={handleSalary}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter salary (e.g., 60-70k/mon)" />
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Job Description</label>
                        <textarea
                            id="description"
                            name="description"
                            onChange={handleDescription}
                            value={description}
                            rows="5"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter job description"
                            required >
                        </textarea>
                    </div>

                    {/* Responsibility */}
                    <div>
                        <label htmlFor="Responsibility" className="block text-sm font-medium text-gray-700">Job Responsibility</label>
                        <textarea
                            id="Responsibility"
                            name="Responsibility"
                            value={Responsibility}
                            onChange={handleResponsibility}
                            rows="5"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter job responsibility"
                            required >
                        </textarea>
                    </div>

                    {/* Requirements */}
                    <div>
                        <label htmlFor="Requirements" className="block text-sm font-medium text-gray-700">Educational Requirements</label>
                        <textarea
                            id="Requirements"
                            name="Requirements"
                            value={Requirements}
                            onChange={handleRequirements}
                            rows="5"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter educational requirements"
                            required >
                        </textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full md:w-auto px-6 py-3 rounded-md text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Submit Job
                        </button> <ToastContainer></ToastContainer>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobPostForm;