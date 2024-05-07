import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Frequently = () => {
  return (
    <div className=" my-11 px-8 md:px-9 lg:px-16">
      <div>
        <h2 className="text-xl md:text-4xl font-medium mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-[#999] text-sm md:text-base ">
          Confused about buying or selling a home? Skyline can help! <br />
          Explore our listings, get answers to your real estate questions, and
          find a smooth path to your dream property.
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="p-3 md:p-5 lg:p-10 bg-slate-200 rounded-md flex flex-col items-center md:items-start  gap-2 md:gap-5" >
          <h1 className="text-lg  md:text-xl">How do I search for properties on Skyline?</h1>
          <p className="">
            Learn how to use our user-friendly search tools to find properties
            that match your criteria.
          </p>
          <button className="p-2 bg-slate-950 rounded text-white">Read More</button>
        </div>
        <div className="p-3 md:p-5 lg:p-10 bg-slate-200 rounded-md flex flex-col  items-center md:items-start  gap-2 md:gap-5" >
          <h1 className="text-lg  md:text-xl">What documents do I need to sell my property through Skyline?</h1>
          <p className="">
          Find out about the necessary documentation for listing your property with us.
          </p>
          <button className="p-2 bg-slate-950 rounded text-white">Read More</button>
        </div>
        <div className="p-3 md:p-5 lg:p-10 bg-slate-200 rounded-md  flex flex-col  items-center md:items-start gap-2 md:gap-5" >
          <h1 className="text-lg  md:text-xl">How can I contact an Skyline agent?</h1>
          <p className="">
            Learn how to use our user-friendly search tools to find properties
            that match your criteria.
          </p>
          <button className="p-2 bg-slate-950 rounded text-white">Read More</button>
        </div>
      </div>
      <div className='flex gap-2 justify-center mt-4' >

<button><FaArrowCircleLeft className='h-6 w-6 ' /></button>
<button><FaArrowCircleRight className='h-6 w-6' /></button>
</div>
    </div>
  );
};

export default Frequently;
