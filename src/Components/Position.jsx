import React from 'react';
import img1 from "../assets/image 18.svg";
import img2 from "../assets/image 20.svg";
import img3 from "../assets/image 19.svg";
import { FaArrowRightLong } from "react-icons/fa6";

function Position() {
  return (
    <div className='w-[90%] m-auto mt-10'>
      <div>
        <h1 className='text-[36px] text-[#4D4D4D] font-bold w-[40%] m-auto text-center'>
          Caring is the new marketing
        </h1>
        <p className='text-gray-500 w-[53%] m-auto text-center'>
          The Nexcent blog is the best place to read about the latest membership insights, trends and more.
          See who‘s joining the community, read about how our community are
          increasing their membership income and lot‘s more.
        </p>
      </div>

      <div className='flex items-center justify-between mb-10 mt-10'>

        {/* Card 1 */}
        <div className='relative'>
          <img src={img1} alt="" className='w-[300px] h-auto' />
          <div className='w-[250px] bg-white text-center shadow-md absolute -bottom-6 left-1/2 transform -translate-x-1/2 p-3'>
            <h1 className='text-sm font-semibold'>
              Creating Streamlined Safeguarding Processes with OneRen.
            </h1>
            <span className='text-[#4caf4f] flex items-center justify-center gap-2 mt-2 text-sm font-medium cursor-pointer'>
              Read More <FaArrowRightLong />
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className='relative'>
          <img src={img3} alt="" className='w-[300px] h-auto' />
          <div className='w-[250px] bg-white text-center shadow-md absolute -bottom-6 left-1/2 transform -translate-x-1/2 p-3'>
            <h1 className='text-sm font-semibold'>
              What are your responsibilities and how can you manage them?
            </h1>
            <span className='text-[#4caf4f] flex items-center justify-center gap-2 mt-2 text-sm font-medium cursor-pointer'>
              Read More <FaArrowRightLong />
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className='relative'>
          <img src={img2} alt="" className='w-[300px] h-auto' />
          <div className='w-[250px] bg-white text-center shadow-md absolute -bottom-6 left-1/2 transform -translate-x-1/2 p-3'>
            <h1 className='text-sm font-semibold'>
              Revamping the Membership Model with Triathlon Australia.
            </h1>
            <span className='text-[#4caf4f] flex items-center justify-center gap-2 mt-2 text-sm font-medium cursor-pointer'>
              Read More <FaArrowRightLong />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Position;
