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
      <div data-aos="slide-right" data-aos-delay="200" className='lg:w-[50%] w-full flex flex-col justify-center items-center lg:p-[60px] p-[30px] gap-8 bg-white lg:h-[550px] h-fit'>
        <h1 className='text-[40px] font-semibold font-Lobster'>Why Us</h1>
        <p className='text-[18px] text-justify'>
          <li>Quality Ingredients: We use only the best all-natural ingredients.</li>
          <li>Unique Flavors: Discover both classic and seasonal flavors.</li>
          <li>Handcrafted: Each batch is made with care for quality.</li>
          <li>Custom Options: Perfect for events and special occasions.</li>
          <li>Sustainable Practices: We prioritize eco-friendly methods.</li>
        </p>
        <button className='bg-red-600 px-10 py-3 text-white rounded-full font-semibold'>READ MORE</button>
      </div>
      <div data-aos="slide-left" data-aos-delay="200" className='lg:w-[50%] w-full'>
        <img src={whyus} alt="why us image" className='w-full lg:h-[550px] h-auto object-cover' />
      </div>
    </div>
  );
}

export default Whyus;
