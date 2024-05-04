import bannerImg from '../../assets/Image/banner/bannerImg.png';
import subContainer from '../../assets/Image/banner/subContainer.png'

const Banner = () => {
    return (
        <div className='flex'>
            {/* banner content start here */}
            <div className='flex flex-col py-24 ps-28'>
              <h1 className='text-6xl font-semibold mb-6'>Discover Your Dream <br /> Property with Estateins</h1>
              <p className='text-base text-[#999]'>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
              <div className='text-white flex gap-5 my-14'>
                <button className='bg-black  px-[18px] py-4  rounded-xl'>Learn More</button>
                <button className='bg-[#703BF7] px-6 py-4 rounded-xl'>Browse Properties</button>
              </div>
              <div className='flex text-white gap-5'>
                 <div className='bg-[#1A1A1A] px-6 py-4 rounded-xl'>
                    <h1 className='text-4xl'>200+</h1>
                    <p  className='text-[#999] text-lg' >Happy Customers</p>
                 </div>
                 <div className='bg-[#1A1A1A] px-6 py-4 rounded-xl'>
                    <h1 className='text-4xl'>10k+</h1>
                    <p  className='text-[#999] text-lg' >Properties For Clients</p>
                 </div>
                 <div className='bg-[#1A1A1A] px-6 py-4 rounded-xl'>
                    <h1 className='text-4xl'>16+</h1>
                    <p className='text-[#999] text-lg' > Years of Experience</p>
                 </div>
              </div>
            </div>
            {/* banner image start here */}
            <div className=''>
                       <img className='absolute top-52 right-50' src={subContainer} alt="" />
                       <img className='h-screen object-cover' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;