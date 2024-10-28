const JobDetailsBaner = () => {
  return (
    <div className="text-center bg-green-50 relative w-full mb-5">
      <br />
      <br />
      <h2 className="text-2xl font-bold p-5 md:p-8 lg:p-10">Job Details</h2>
      <br />
      <br />
      <div className="absolute bottom-0 left-0">
        <img
          className="w-1/3 md:w-1/2 sm:w-1/4 md:w-1/2 lg:w-full h-auto"
          src="../../assets/images/bg1.png"
          alt=""
        />
      </div>
      {/* <div className="absolute -top-0 right-0 flex justify-end z-100">
        <img
          className="w-full sm:w-1/4 md:w-1/2 h-auto"
          src="../../assets/images/bg2.png"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default JobDetailsBaner;
