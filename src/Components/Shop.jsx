import React, { useEffect } from "react";
import frame from "../assets/frame.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Shop = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <div
      id="shop"
      className="w-full lg:px-[170px] px-[20px] lg:pt-[150px] pt-[60px] pb-[0px] bg-gray-300 flex lg:flex-row flex-col justify-center items-start"
    >
      <div className="lg:w-[50%] w-full">
        <img
          data-aos="slide-right"
          data-aos-delay="200"
          src={frame}
          alt="shop image"
          className="z-10"
        />
      </div>
      <div className="lg:w-[50%] w-full z-20 flex flex-col justify-center items-start lg:gap-[100px] gap-[70px] lg:ml-[-50px] lg:mt-[-60px]">
        <div
          data-aos="slider-down"
          data-aos-delay="400"
          className="bg-red-600 p-12 lg:w-[70%] w-full flex flex-col justify-center items-start ga-5 rounded-3xl"
        >
          <h1 className="text-white text-[30px] font-Lobster">Online Shop</h1>
          <p className="text-white text-[50px] font-light leading-[50px]">
            Ice Cream Delivery to all 50 states
          </p>
        </div>
        <div
          data-aos="slide-down"
          data-aos-delay="400"
          className="bg-white lg:p-8 mt-[180px] p-8 lg:w-[90%] w-full flex flex-col items-start gap-[12px] rounded-3xl"
        >
          <h1 className="text-[35px] font-Lobster leading-[45px]">
            Ice Cream & Vegan Ice Cream
          </h1>
          <p className="text-[18px] text-justify">
            Ice cream is a classic frozen dessert made from dairy, featuring
            rich flavors like chocolate and vanilla. Its creamy texture comes
            from blending milk, cream, sugar, and various flavorings. Vegan ice
            cream, on the other hand, is a delicious dairy-free alternative.
            Made with plant-based ingredients such as almond milk, coconut milk,
            or soy milk, it offers a creamy consistency without animal products.
            Both options can be enjoyed in cones, sundaes, and shakes, making
            them versatile treats. Whether you’re a fan of traditional ice cream
            or looking for vegan choices, there’s a flavor for everyone to
            enjoy!
          </p>
          <button className="bg-red-600 px-10 py-3 text-white rounded-full font-semibold">
            REACH US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
