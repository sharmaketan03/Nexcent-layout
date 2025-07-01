import React from 'react';
import img1 from "../assets/image 18.svg";
import img2 from "../assets/image 20.svg";
import img3 from "../assets/image 19.svg";
import { FaArrowRightLong } from "react-icons/fa6";

function Position() {
  return (
    <div className="w-full px-4 py-10">
      <div className="max-w-6xl mx-auto">
       
        <div className="text-center mb-10 px-2">
          <h1 className="text-[28px] md:text-[36px] text-[#4D4D4D] font-bold max-w-2xl mx-auto">
            Caring is the new marketing
          </h1>
          <p className="text-gray-500 max-w-3xl mx-auto mt-4 text-[15px]">
            The Nexcent blog is the best place to read about the latest membership insights, trends and more.
            See who‘s joining the community, read about how our community are
            increasing their membership income and lot‘s more.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
       
          <div className="relative w-full max-w-[300px]">
            <img src={img1} alt="card 1" className="w-full h-auto rounded-md" />
            <div className="w-[90%] max-w-[250px] bg-white text-center shadow-md absolute -bottom-6 left-1/2 transform -translate-x-1/2 p-4">
              <h1 className="text-sm font-semibold">
                Creating Streamlined Safeguarding Processes with OneRen.
              </h1>
              <span className="text-[#4caf4f] flex items-center justify-center gap-2 mt-2 text-sm font-medium cursor-pointer">
                Read More <FaArrowRightLong />
              </span>
            </div>
          </div>

          <div className="relative w-full max-w-[300px]">
            <img src={img3} alt="card 2" className="w-full h-auto rounded-md" />
            <div className="w-[90%] max-w-[250px] bg-white text-center shadow-md absolute -bottom-6 left-1/2 transform -translate-x-1/2 p-4">
              <h1 className="text-sm font-semibold">
                What are your responsibilities and how can you manage them?
              </h1>
              <span className="text-[#4caf4f] flex items-center justify-center gap-2 mt-2 text-sm font-medium cursor-pointer">
                Read More <FaArrowRightLong />
              </span>
            </div>
          </div>

          <div className="relative w-full max-w-[300px]">
            <img src={img2} alt="card 3" className="w-full h-auto rounded-md" />
            <div className="w-[90%] max-w-[250px] bg-white text-center shadow-md absolute -bottom-6 left-1/2 transform -translate-x-1/2 p-4">
              <h1 className="text-sm font-semibold">
                Revamping the Membership Model with Triathlon Australia.
              </h1>
              <span className="text-[#4caf4f] flex items-center justify-center gap-2 mt-2 text-sm font-medium cursor-pointer">
                Read More <FaArrowRightLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Position;
