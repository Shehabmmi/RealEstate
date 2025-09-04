import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import heroImage from "../../assets/hero-image.png";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-[#484746] to-black text-white min-h-[90vh] flex items-center">
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
      
        <div className="flex-1 space-y-10 text-center  md:text-left py-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="block">Discover</span>
            Most Suitable 
            <span className="block">Property</span>
          </h1>

          <p className="text-gray-400 max-w-lg mx-auto md:mx-0">
            Find a variety of properties that suit you very easilty. Forget all
            difficulties in finding a residence for you
          </p>

          <SearchInput />

          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-4">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-3xl font-bold">9000+</span>
              <span className="text-sm text-gray-400">Premium Product</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-3xl font-bold">2000+</span>
              <span className="text-sm text-gray-400">Happy Customer</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-3xl font-bold">28+</span>
              <span className="text-sm text-gray-400">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="flex-1 flex justify-center py-10">
          <img
            src={heroImage}
            alt="home Image"
            className="w-64 sm:w-80 md:w-[500px] rounded-t-full shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
