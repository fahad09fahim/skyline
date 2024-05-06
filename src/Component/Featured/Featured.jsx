import featured1 from '../../assets/Image/featured/featured1.png';
import featured2 from '../../assets/Image/featured/featured2.png';
import featured3 from '../../assets/Image/featured/featured3.png';
import { MdOutlineBedroomParent } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { FaArrowCircleLeft, FaArrowCircleRight, FaBuilding } from "react-icons/fa";


const Featured = () => {
  return (
    <div className="my-11 px-8 md:px-9 lg:px-16">
      <div>
        <div className="flex flex-col gap-3">
        <h1 className="text-xl md:text-4xl font-medium">Featured Properties</h1>
        <p className="text-sm md:text-base text-[#999]">
          Discover our curated collection of premier properties. Each listing
          provides a sneak peek into extraordinary homes <br /> and investment
          opportunities offered by Skyline.  Click <span className="text-black font-medium">"Learn More"</span> for additional
          details.
        </p>
      </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  my-6'>
        {/* single card. you can use it by fetching data*/}
        <div className='p-3 md:p-5 lg:p-8 bg-slate-200 rounded-lg'> 
           <img  src={featured1} alt="" /> 
           <h1 className='text-lg md:text-xl font-medium'>Seaside Serenity Villa</h1>
           <p>A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood</p>
           <div className='flex gap-1 my-1'>
               <div className='flex items-center  justify-center gap-1 p-1 bg-slate-600 rounded-md text-white' >
               <MdOutlineBedroomParent />
               <p>4-Bedroom</p>
               </div>
               <div className='flex items-center justify-center  gap-1 p-1 bg-slate-600 rounded-md text-white'> 
               <GiBathtub />
               <p>3-Bathroom</p>
               </div>
               <div className='flex items-center  justify-center gap-1 p-1 bg-slate-600 rounded-md text-white' >
               <FaBuilding />
               <p>Villa</p>
               </div>
           </div>
           <div className='flex justify-between my-2'>
                <div>
                    <h4>price</h4>
                    <h2>$500.00</h2>
                </div>
                <button className='bg-[#703BF7] text-white font-medium px-2 py-1 rounded-xl transition-transform duration-500 transform hover:scale-105'>view property details</button>
           </div>
        </div>
        <div className='p-3 md:p-5 lg:p-8 bg-slate-200 rounded-lg'>
           <img src={featured2} alt="" /> 
           <h1 className='text-lg md:text-xl font-medium'>Metropolitan Haven</h1>
           <p>A chic and fully-furnished 2-bedroom apartment with panoramic city views</p>
           <div className='flex gap-1 my-1'>
               <div className='flex items-center  justify-center gap-1 p-1 bg-slate-600 rounded-md text-white' >
               <MdOutlineBedroomParent />
               <p>2-Bedroom</p>
               </div>
               <div className='flex items-center justify-center  gap-1 p-1 bg-slate-600 rounded-md text-white'> 
               <GiBathtub />
               <p>2-Bathroom</p>
               </div>
               <div className='flex items-center  justify-center gap-1 p-1 bg-slate-600 rounded-md text-white' >
               <FaBuilding />
               <p>Villa</p>
               </div>
           </div>
           <div className='flex justify-between my-2'>
                <div>
                    <h4>price</h4>
                    <h2>$650.00</h2>
                </div>
                <button className='bg-[#703BF7] text-white font-medium px-2 py-1 rounded-xl transition-transform duration-500 transform hover:scale-105'>view property details</button>
           </div>
        </div>
        <div className='p-3 md:p-5 lg:p-8 bg-slate-200 rounded-lg'>
           <img src={featured3} alt="" /> 
           <h1 className='text-lg md:text-xl font-medium'>Rustic Retreat Cottage</h1>
           <p>An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community</p>
           <div className='flex gap-1 my-1'>
               <div className='flex items-center  justify-center gap-1 p-1 bg-slate-600 rounded-md text-white' >
               <MdOutlineBedroomParent />
               <p>3-Bedroom</p>
               </div>
               <div className='flex items-center justify-center  gap-1 p-1 bg-slate-600 rounded-md text-white'> 
               <GiBathtub />
               <p>3-Bathroom</p>
               </div>
               <div className='flex items-center  justify-center gap-1 p-1 bg-slate-600 rounded-md text-white' >
               <FaBuilding />
               <p>Villa</p>
               </div>
           </div>
           <div className='flex justify-between my-2'>
                <div>
                    <h4>price</h4>
                    <h2>$700.00</h2>
                </div>
                <button className='bg-[#703BF7] text-white font-medium px-2 py-1 rounded-xl transition-transform duration-500 transform hover:scale-105'>view property details</button>
           </div>
        </div>
      </div>
      <div className='flex gap-2 justify-center' >

      <button><FaArrowCircleLeft className='h-6 w-6 ' /></button>
      <button><FaArrowCircleRight className='h-6 w-6' /></button>
      </div>
    </div>
  );
};

export default Featured;
