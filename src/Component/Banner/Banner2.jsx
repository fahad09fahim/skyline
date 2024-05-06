import bannerImg from '../../assets/Image/banner/bannerImg.png'

const Banner2 = () => {
    return (
        <div className="hero  min-h-screen  mb-2" style={{backgroundImage: `url(${bannerImg})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    <div className='flex flex-col '>
              <h1 className='text-2xl md:text-5xl font-semibold mb-6'>Discover Your Dream  Property with Skyline</h1>
              <p className='text-base text-[#999]'>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
              <div className='text-white flex gap-5 my-14 justify-center'>
                <button className='bg-black  px-2 py-1  rounded-xl transition-transform duration-500 transform hover:scale-105'>Learn More</button>
                <button className='bg-[#703BF7] px-4 py-2 rounded-xl transition-transform duration-500 transform hover:scale-105'>Browse Properties</button>
              </div>
              
            </div>
    </div>
  </div>
</div>
    );
};

export default Banner2;