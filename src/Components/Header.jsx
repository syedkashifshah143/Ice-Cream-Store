import React, { useState } from 'react';
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu open & close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Menu links content
  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'About', path: 'about' },
    { link: 'Why Us', path: 'whyus' },
    { link: 'Shop', path: 'shop' },
    { link: 'Contact', path: 'contact' },
  ];

  return (
    <nav className='w-full bg-gray-600 flex justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50'>
      <h1 className='text-white md:text-5xl text-4xl font-Lobster'>ICY <span className='text-red-600 italic'>Delights</span></h1>

      <ul className='lg:flex justify-center items-center gap-6 hidden'>
        {navItems.map(({link, path})=>(
          <Link key={path} className='text-white uppercase font-semibold cursor-pointer p-3 rounded-full hover:bg-red-600 hover:text-white text-[15px]' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
        ))}
      </ul>

      <button className='bg-red-600 hover:bg-white hover:text-black text-white px-10 py-3 rounded-full font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden'>ORDER NOW</button>

      {/* movile menu starts here */}
      <div className='flex justify-between items-center lg:hidden mt-3' onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className='text-white text-3xl cursor-pointer' /> : <FaBars className='text-white text-3xl cursor-pointer' />}
        </div>
      </div>

      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-red-600 p-4 absolute top-[72px] left-0`} onClick={closeMenu}>
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {navItems.map(({link, path})=>(
            <Link key={path} className='text-white uppercase font-semibold cursor-pointer p-2 rounded-lg hover:text-white hover:bg-gray-600 w-full text-center' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header;
