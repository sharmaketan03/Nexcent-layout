import React from 'react';
import img from "../assets/pana.svg";

function Designwithcss() {
  return (
    <div className="w-full px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
       
        <div className="w-full md:w-[45%] flex justify-center">
          <img src={img} alt="Footer Design" className="w-full max-w-[400px]" />
        </div>

        <div className="w-full md:w-[50%]">
          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4D4D4D] mb-4 leading-tight">
            How to design your site footer like <span className="text-[#4caf4f]">we did?</span>
          </h1>
          <p className="text-gray-500 mb-4 text-[15px] leading-relaxed">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
          </p>
          <button className="px-6 py-2 bg-[#4caf4f] text-white rounded hover:bg-[#8bfb8d] transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Designwithcss;
