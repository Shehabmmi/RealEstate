import React from "react";
import ContactCard from "../Card/ContactCard";
import building from "../../assets/hero-image.png"


export default function ContactUs() {
  return (
    <div id="contact_us" className="container py-10 px-6 flex flex-col lg:flex-row items-start gap-10">
      {/* Details */}
      <div className="flex-[1.1] max-w-xl text-center lg:text-left space-y-4">
        <h3 className="text-[#F4A502] text-2xl font-bold">Our Contact Us</h3>
        <h1 className="text-[#1F3E72] text-3xl md:text-4xl font-bold">Easy to contact us</h1>
        <p className="text-gray-400">
          We always ready to help by providijng the best services for you. We
          beleive a good blace to live can make your life better
        </p>
        <ContactCard/>
      </div>

      {/* Image */}
      <div className="flex-[0.9] w-full flex justify-center lg:justify-center">
        <img
          src={building}
          alt="building image"
          className="w-72 sm:w-96 md:w-[28rem] lg:w-[34rem] rounded-t-full object-cover"
        />
      </div>
    </div>
  );
}

