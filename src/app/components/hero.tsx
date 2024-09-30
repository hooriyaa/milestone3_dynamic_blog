"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-purple-100 max-h-screen">
      <section className="text-gray-800 body-font text-lg font-serif font-bold bg-purple-100">
        <div className="container mx-auto flex px-5 py-3 md:flex-row flex-col justify-center items-center">
          {/* Left Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col  md:items-center md:text-left  md:mb-0 items-center text-center">
            <p className="pb-3 text-4xl text-purple-800 mt-14">Welcome to My Blog</p>
            <h1 className="title-font text-center mt-3 md:mb-10 text-lg font-medium text-black">
              Discover insights, tutorials, and stories around web development, programming, and tech. Whether you are a developer or just starting your coding journey, you'll find tips, guides, and inspiration. Join the community and simplify complex topics while fueling your passion.
            </h1>
            <div className="flex justify-center items-center md:pt-1 pt-5">
              <button className="inline-flex bg-[#7A1CAC] text-white px-6 py-3 rounded-lg hover:bg-[#9737cb] transition-colors duration-300 shadow-md">
                Explore Now
              </button>
            </div>
          </div>
          {/* Right Image */}
          <div className="lg:max-w-lg md:pr-20 lg:w-full md:w-1/2 w-5/6 rounded-2xl ">
            <Image
              className="object-contain md:h-[480px] h-[355px] rounded-3xl hover:scale-105 duration-500 hover:duration-500"
              alt="Coding blog cover"
              src={require("../../assets/images/hero1.jpg")}
              width={500}
              height={340}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
