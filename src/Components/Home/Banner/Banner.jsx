
const Banner = () => {
    return (
        <div>
            <div className="flex items-center bg-green-50 w-full">
                <div className="flex justify-center w-3/5">
                    <div className="w-1/2">
                        <h2 className="text-6xl leading-snug font-bold">One Step <br /> Closer To Your <br /><span className="text-[#7c4eff]">Dream Job</span></h2>
                        <p className="mt-3 mb-5">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="py-3 px-5 rounded-md text-white tracking-wider font-bold bg-gradient-to-r from-[#7e90fe] to-[#9873ff]">Get Started</button>
                    </div>
                </div>
                <div className="w-2/5">
                    <img src="../../../assets/images/user.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;