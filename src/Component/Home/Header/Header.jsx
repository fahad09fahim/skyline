import { useState } from 'react';
import logo from '../../../assets/Image/Logo/logo.svg'
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdCloseCircle } from "react-icons/io";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle menu visibility on button click
      };
    const navList=<>
    <li className='hover:bg-[#333333] text-white p-2 rounded-lg'>Home</li>
    <li className='hover:bg-[#333333] text-white p-2 rounded-lg'>About Us</li>
    <li className='hover:bg-[#333333] text-white p-2 rounded-lg'>Properties</li>
    <li className='hover:bg-[#333333] text-white p-2 rounded-lg'>Service</li>
    <button className='bg-[#000000] text-white p-3 rounded-lg  flex md:hidden mb-2'>
                Contact Us
               </button>
    </>
    return (
        <nav className='flex justify-between  px-11 py-5 items-center bg-[#1A1A1A]  text-white'>
            {/* logo */}
            <div className='flex items-center justify-center gap-2 text-2xl font-medium '>
              <img src={logo} alt="" />
              <h3>Skyline</h3>
            </div>
            {/* nav list */}
            <div className={`absolute z-10 md:hidden md:min-h-fit bg-[#262626] min-h-[40vh] left-0 top-[10%]   w-full md:w-auto flex items-center px-5 justify-center ${isOpen ? 'block' : 'hidden'}`}>
             <ul className='flex flex-col md:flex-row items-center justify-center md:gap-[5vw] gap-8 '>
                {navList}
             </ul>
            </div>
            <div className='hidden md:flex'>
             <ul className='flex flex-col md:flex-row items-center justify-center md:gap-[5vw] gap-8 '>
                {navList}
             </ul>
            </div>
            {/* button */}
            <div>
               <button  className='bg-[#000000] text-white p-3 rounded-lg  hidden md:flex'>
                Contact Us
               </button>
            </div>
            <div className='flex items-center md:hidden '>
                <button className='text-3xl cursor-pointer ' onClick={toggleMenu}>
               
                {isOpen ? <IoMdCloseCircle /> : <HiBars3BottomRight />}
                </button>
            </div>
        </nav>
    );
};

export default Header;