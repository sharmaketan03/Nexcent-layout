import React from 'react'
import img1 from "../assets/Frame 35.svg"

function Passwithimg() {
  return (
    <div className="w-full px-4 py-10">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
   
       <div className="w-full md:w-[45%]">
          <img src={img1} alt="Pixelgrade" className="w-full max-w-full" />
        </div>

        <div className="w-full md:w-[50%]">
          <h1 className="text-[28px] md:text-[36px] font-medium text-[#4d4d4d] mb-4 leading-tight">
            The unseen of spending three years at <span className="text-[#4caf4f]">Pixelgrade</span>
          </h1>
          <p className="text-gray-500 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <button className="px-6 py-2 bg-[#4caf4f] text-white rounded hover:bg-[#8bfb8d] transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Passwithimg
