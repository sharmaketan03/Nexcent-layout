import React from 'react'
import img1 from "../assets/Frame 35.svg"
function Passwithimg() {
  return (
    <div className='w-[90%] m-auto flex items-center justify-between px-5'>
         <div className='w-[38%]'>
            <img src={img1} alt=""  className='w-[90%]'/>
         </div>
         <div className='w-[48%]'>
              <h1 className='text-[36px] font-medium text-[#4d4d4d] mb-3'>The unseen of spending three years at <span className='text-[#4caf4f] text-[36px]'>Pixelgrade</span></h1> 
              <p className='text-gray-500 mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
              <button className='px-[16px] py-[8px] bg-[#4caf4f] text-white rounded mt-4 hover:bg-[#8bfb8d]'>Learn More</button>
         </div>

    </div>
  )
}

export default Passwithimg