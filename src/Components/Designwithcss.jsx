import React from 'react'
import img from "../assets/pana.svg"
function Designwithcss() {
  return (
    <div className='w-[90%] m-auto flex items-center justify-between mt-8'>
        <div className='w-[30%]'>
            <img src={img} alt="" />
        </div>
        <div className='w-[46%]'>
              <h1 className='text-[#4D4D4D] text-[36px] font-bold mb-3'>How to design your site footer like <span className='text-[#4caf4f]'>we did ?</span></h1>
              <p className='text-gray-500 mb-2'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
             <button className='px-[16px] py-[8px] bg-[#4caf4f] text-white rounded mt-4 hover:bg-[#8bfb8d]'>Learn More</button>
        </div>
    </div>
  )
}

export default Designwithcss