import React from 'react'
import { FaCopyright, FaArrowUp } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = () => {

  return (
    <>
    <div className='bg-gray-600 text-white p-4 flex justify-center items-start gap-3'>
      <FaCopyright className='lg:size-6 size-8' />
      <p className='text-center font-semibold'>Copyright 2024, ICE CREAM STORE, ALL Rights Reserved</p>
    </div>

    {/* scroll to top button */}
    <div id='icon-box' className='bg-red-600 text-white p-3 rounded-full hover:bg-white hover:text-red-600 cursor-pointer fixed lg:bottom-6 right-6 bottom-6'>
      <Link to='hero' spy={true} offset={-100} smooth={true}><FaArrowUp className='size-[30px]' /></Link>
    </div>
    </>
  )
}

export default Footer