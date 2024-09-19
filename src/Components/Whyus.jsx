import React, { useEffect } from 'react';
import whyus from '../assets/whyus.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Whyus = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <div id='whyus' className='w-full lg:px-[170px] px-[20px] py-[80px] bg-gray-300 flex lg:flex-row flex-col justify-center items-start'>
      <div data-aos="slide-right" data-aos-delay="200" className='lg:w-[50%] w-full flex flex-col justify-center items-start lg:p-[60px] p-[30px] gap-8 bg-white lg:h-[550px] h-fit'>
        <h1 className='text-[55px] font-semibold font-Lobster'>Why Us</h1>
        <p className='text-[18px] text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum perspiciatis expedita recusandae libero atque eum obcaecati deleniti? Explicabo amet asperiores dolorum autem ad, debitis modi, quasi eum magnam error nobis.</p>
        <button className='bg-red-600 px-10 py-3 text-white rounded-full font-semibold'>READ MORE</button>
      </div>
      <div data-aos="slide-left" data-aos-delay="200" className='lg:w-[50%] w-full'>
        <img src={whyus} alt="why us image" className='w-full lg:h-[550px] h-auto object-cover' />
      </div>
    </div>
  );
}

export default Whyus;
