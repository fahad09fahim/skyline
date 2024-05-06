

const StartHere = () => {
  return (
    <div className="my-5 px-8 md:px-9 lg:px-16 " >
      <div className="bg-slate-200 p-4 md:p-14 rounded-lg flex flex-col md:flex-row justify-center items-center gap-5">
      <div className="w-3/4">
        <h1 className="text-lg md:text-2xl font-medium">Start Your Real Estate Journey Today</h1>
        <p className="text-sm md:text-base">
          Your dream property is just a click away. Whether you're looking for a
          new home, a strategic investment, <br /> or expert real estate advice, <br />
          Skyline is here to assist you every step of the way. Take the first
          step towards your real estate goals  and explore our available
          properties or get in touch with our team for personalized assistance.
        </p>
      </div>
      <div  className="flex-grow">
      <button className=" text-base bg-[#703BF7] text-white font-medium px-2 py-1 rounded-xl transition-transform duration-500 transform hover:scale-105">
      Explore Properties
      </button>
      </div>
      </div>
    </div>
  );
};

export default StartHere;
