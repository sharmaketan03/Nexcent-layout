import React from 'react';
import img from "../assets/image 9smith.svg";
import img1 from "../assets/Logo co.svg";
import img2 from "../assets/Logo ipsum.svg";
import img3 from "../assets/Logo roll.svg";
import img4 from "../assets/vector.svg";
import img5 from "../assets/Logo infinity.svg";
import img6 from "../assets/Logo ufo .svg";
import { FaArrowRightLong } from "react-icons/fa6";

function TeslaSection() {
  return (
    <div className='bg-[#f5f7fa] '>
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-10 py-12 mt-10">
        
        <div className="w-[100%]">
          <img src={img} alt="Testimonial" className="w-[100%] rounded-lg shadow-md" />
        </div>

        <div>
          <p className="text-gray-600 text-sm leading-relaxed ">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum
            risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in,
            gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie,
            nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales.
            Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,
            vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h2 className="text-xl font-bold text-[#4caf4f]">Tim Smith</h2>
          <p className="text-sm text-gray-500">British Dragon Boat Racing Association</p>

          <div className="flex flex-wrap items-center gap-4 mt-4 ">
            <img src={img3} alt="Customer logo" className="h-10 w-auto" />
            <img src={img6} alt="Customer logo" className="h-10 w-auto" />
            <img src={img1} alt="Customer logo" className="h-10 w-auto" />
            <img src={img2} alt="Customer logo" className="h-10 w-auto" />
            <img src={img5} alt="Customer logo" className="h-10 w-auto" />
            <img src={img4} alt="Customer logo" className="h-10 w-auto" />
            <img src={img1} alt="Customer logo" className="h-10 w-auto" />

            <div className="mt-4">
              <button className="flex items-center gap-2 text-[#4caf4f] text-[18px] font-medium hover:underline">
                Meet All Customers <FaArrowRightLong className="mt-[2px]" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TeslaSection;
