import React from "react";
import Homeimg from "../assets/Illustration.svg";
import "flowbite";

function Homepage() {
  return (
    <div className="bg-[#f5f7fa] px-5 py-10 w-full">
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        
       
        <div className="relative h-[450px] overflow-hidden rounded-lg">
          
         
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            
            <div className="w-[90%] m-auto flex items-center justify-between h-full bg-white shadow-xl rounded-lg p-8">
              <div className="w-[40%]">
                <h1 className="text-[36px] text-[#4d4d4d] font-bold w-[80%]">
                  Lessons and insights <span className="text-[#4caf4f]">from 8 years</span>
                </h1>
                <p className="text-gray-500 mt-4">
                  Where to grow your business as a photographer: site or social media?
                </p>
                <div className="mt-10 px-4 py-2 bg-[#4caf4f] inline-block rounded text-white font-bold">
                  <button>Register</button>
                </div>
              </div>
              <div className="w-[30%]">
                <img src={Homeimg} alt="Slide 1" className="w-[350px]" />
              </div>
            </div>
          </div>

          
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="w-[90%] m-auto flex items-center justify-between h-full bg-white shadow-xl rounded-lg p-8">
              <div className="w-[40%]">
                <h1 className="text-[36px] text-[#4d4d4d] font-bold w-[80%]">
                  Empower your business <span className="text-[#4caf4f]">with tools</span>
                </h1>
                <p className="text-gray-500 mt-4">
                  Use the right tech stack to scale efficiently and deliver results.
                </p>
                <div className="mt-10 px-4 py-2 bg-[#4caf4f] inline-block rounded text-white font-bold">
                  <button>Register</button>
                </div>
              </div>
              <div className="w-[30%]">
                <img src={Homeimg} alt="Slide 2" className="w-[350px]" />
              </div>
            </div>
          </div>

          
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="w-[90%] m-auto flex items-center justify-between h-full bg-white shadow-xl rounded-lg p-8">
              <div className="w-[40%]">
                <h1 className="text-[36px] text-[#4d4d4d] font-bold w-[80%]">
                  Grow smarter <span className="text-[#4caf4f]">not harder</span>
                </h1>
                <p className="text-gray-500 mt-4">
                  Maximize your potential with data-driven decisions.
                </p>
                <div className="mt-10 px-4 py-2 bg-[#4caf4f] inline-block rounded text-white font-bold">
                  <button>Register</button>
                </div>
              </div>
              <div className="w-[30%]">
                <img src={Homeimg} alt="Slide 3" className="w-[350px]" />
              </div>
            </div>
          </div>
        </div>

       
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          <button type="button" className="w-3 h-3 rounded-full bg-[#4caf4f]" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" className="w-3 h-3 rounded-full bg-[#4caf4f]/50" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" className="w-3 h-3 rounded-full bg-[#4caf4f]/50" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>

        
        {/* <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
            <svg className="w-4 h-4 text-gray-800" fill="none" viewBox="0 0 6 10">
              <path d="M5 1L1 5l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
            <svg className="w-4 h-4 text-gray-800" fill="none" viewBox="0 0 6 10">
              <path d="m1 9 4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button> */}
      </div>
    </div>
  );
}

export default Homepage;
