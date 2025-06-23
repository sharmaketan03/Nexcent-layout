import React from 'react'
import logo from "../assets/Logo.svg"

function Header() {
  return (
    <div >
    <div className='flex items-center justify-between w-[90%] m-auto pt-5    '>
          <div>
              <img src={logo} alt="" />
          </div>
          <nav>
             <ul className='flex'> 
                <li className='mr-4'>Home</li>
                <li  className='mr-4'>Service</li>
                <li  className='mr-4'>Features</li>
                <li  className='mr-4'>Product</li>
                <li  className='mr-4'>Testimonial</li>
                <li  className='mr-4'>FAQ</li>
             </ul>
          </nav>
          <div>
              <button className='mr-4 border border-[#4caf4f]  px-[12px] py-[6px] rounded text-[#4caf4f] hover:text-white hover:bg-[#4caf4f]'>Login</button>
              <button className='mr-4 bg-[#4caf4f] text-white px-[12px] py-[6px] rounded'>Sign up</button>
          </div>
    </div>
    </div>
  )
}

export default Header