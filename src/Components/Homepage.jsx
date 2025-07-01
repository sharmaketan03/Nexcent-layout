  import React from "react";
  import Homeimg from "../assets/Illustration.svg";
  import "flowbite";

  function Homepage() {
    return (
      <div className="bg-[#f5f7fa] px-5 py-10 w-full">
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
          
         
          <div className="relative h-[100vh] overflow-hidden rounded-lg">
            
          
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between bg-white shadow-xl rounded-lg p-6 md:p-10 gap-6 md:gap-0">
                <div className="w-full md:w-[50%] text-center md:text-left">
                  <h1 className="text-[28px] md:text-[36px] text-[#4d4d4d] font-bold leading-tight">
                    Lessons and insights <span className="text-[#4caf4f]">from 8 years</span>
                  </h1>
                  <p className="text-gray-500 mt-4">
                    Where to grow your business as a photographer: site or social media?
                  </p>
                  <div className="mt-6 md:mt-10">
                    <button className="px-5 py-2 bg-[#4caf4f] text-white font-bold rounded">
                      Register
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-[40%] flex justify-center md:justify-end">
                  <img src={Homeimg} alt="Slide 1" className="w-[250px] md:w-[350px]" />
                </div>
              </div>
            </div>

           
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between bg-white shadow-xl rounded-lg p-6 md:p-10 gap-6 md:gap-0">
                <div className="w-full md:w-[50%] text-center md:text-left">
                  <h1 className="text-[28px] md:text-[36px] text-[#4d4d4d] font-bold leading-tight">
                    Empower your business <span className="text-[#4caf4f]">with tools</span>
                  </h1>
                  <p className="text-gray-500 mt-4">
                    Use the right tech stack to scale efficiently and deliver results.
                  </p>
                  <div className="mt-6 md:mt-10">
                    <button className="px-5 py-2 bg-[#4caf4f] text-white font-bold rounded">
                      Register
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-[40%] flex justify-center md:justify-end">
                  <img src={Homeimg} alt="Slide 2" className="w-[250px] md:w-[350px]" />
                </div>
              </div>
            </div>

          
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between bg-white shadow-xl rounded-lg p-6 md:p-10 gap-6 md:gap-0">
                <div className="w-full md:w-[50%] text-center md:text-left">
                  <h1 className="text-[28px] md:text-[36px] text-[#4d4d4d] font-bold leading-tight">
                    Grow smarter <span className="text-[#4caf4f]">not harder</span>
                  </h1>
                  <p className="text-gray-500 mt-4">
                    Maximize your potential with data-driven decisions.
                  </p>
                  <div className="mt-6 md:mt-10">
                    <button className="px-5 py-2 bg-[#4caf4f] text-white font-bold rounded">
                      Register
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-[40%] flex justify-center md:justify-end">
                  <img src={Homeimg} alt="Slide 3" className="w-[250px] md:w-[350px]" />
                </div>
              </div>
            </div>
          </div>

          
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
            <button type="button" className="w-3 h-3 rounded-full bg-[#4caf4f]" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full bg-[#4caf4f]/50" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full bg-[#4caf4f]/50" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          </div>

        </div>
      </div>
    );
  }

  export default Homepage;
