import React, { useEffect } from 'react';
import herobanner from '../assets/herobanner.jpg';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <div id='hero' className='w-full bg-center' style={{ backgroundImage: `url(${herobanner})` }}>
      <div className='lg:w-[80%] w-[90%] m-auto lg:h-[800px] lg:py-[0px] py-[40px] h-fit flex flex-col justify-center lg:items-start items-center gap-6'>
        <h1 className='lg:text-[80px] text-[60px] font-Lobster text-red-600 font-semibold leading-[70px]' data-aos="zoom-in" data-aos-delay="200">
          Ice Cream Shop
        </h1>
        <h2 className='text-[30px] uppercase' data-aos="zoom-in" data-aos-delay="400">
          ICE CREAM SHOP
        </h2>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 lg:w-[60%] w-full mt-3' data-aos="slide-up" data-aos-delay="500">
          <img src={gallery1} alt="gallery image" className='lg:w-[400px] w-full lg:h-[200px]' />
          <img src={gallery2} alt="gallery image" className='lg:w-[400px] w-full lg:h-[200px]' />
          <img src={gallery3} alt="gallery image" className='lg:w-[400px] w-full lg:h-[200px]' />
          <img src={gallery4} alt="gallery image" className='lg:w-[400px] w-full lg:h-[200px]' />
          <img src={gallery5} alt="gallery image" className='lg:w-[400px] w-full lg:h-[200px]' />
          <img src={gallery6} alt="gallery image" className='lg:w-[400px] w-full lg:h-[200px]' />
        </div>
      </div>
    </div>
  );
}

export default Hero;
