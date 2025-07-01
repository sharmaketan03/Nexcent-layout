import React from 'react';
import img1 from "../assets/Logo co.svg";
import img2 from "../assets/Logo ipsum.svg";
import img3 from "../assets/Logo roll.svg";
import img4 from "../assets/Vector.svg";
import img5 from "../assets/Logo infinity.svg";
import img6 from "../assets/Logo ufo .svg";
import img7 from "../assets/Logonex.svg";
import img8 from "../assets/Icon.svg";
import img9 from "../assets/Iconbuild.svg";
import img10 from "../assets/Icongroup .svg";

function OurClients() {
  return (
    <div className="bg-white py-10 px-5">
    
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4d4d4d]">Our Clients</h1>
          <p className="text-gray-500">We have been working with some Fortune 500+ clients</p>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 my-10 px-3">
          {[img3, img6, img1, img2, img5, img4, img7].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`logo-${i}`}
              className="w-[60px] sm:w-[70px] md:w-[90px] lg:w-[100px] h-auto object-contain"
            />
          ))}
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto text-center">
        <h1 className="text-[28px] md:text-[36px] font-bold text-[#4d4d4d] mt-24">
          Manage your entire community in a single system
        </h1>
        <p className="text-gray-500 mt-2">Who is Nextcent suitable for?</p>
      </div>

   
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-8 mt-12">
    
        <div className="flex-1 text-center px-4">
          <img src={img8} alt="icon1" className="mx-auto mb-4" />
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#4d4d4d] mb-2">Membership Organisations</h2>
          <p className="text-gray-500">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>

        <div className="flex-1 text-center px-4">
          <img src={img9} alt="icon2" className="mx-auto mb-4" />
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#4d4d4d] mb-2">National Associations</h2>
          <p className="text-gray-500">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>

        <div className="flex-1 text-center px-4">
          <img src={img10} alt="icon3" className="mx-auto mb-4" />
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#4d4d4d] mb-2">Clubs And Similar Groups</h2>
          <p className="text-gray-500">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurClients;
