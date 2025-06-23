import React from 'react'
import img1 from "../assets/Logo co.svg"
import img2 from "../assets/Logo ipsum.svg"
import img3 from "../assets/Logo roll.svg"
import img4 from "../assets/Vector.svg"
import img5 from "../assets/Logo infinity.svg" 
import img6 from "../assets/Logo ufo .svg"
import img7 from "../assets/Logonex.svg"
import img8 from "../assets/Icon.svg"
import img9 from "../assets/Iconbuild.svg"
import img10 from "../assets/Icongroup .svg"
function OurClients() {
  return (
    <div>
    <div className='mt-10 w-[90%] m-auto'>
         <div className='text-center'>
             <h1 className='text-[36px] font-bold text-[#4d4d4d]'>Our Clients</h1>
             <p className='text-gray-500'>We have been working with some Fortune 500+ clients</p>
         </div>
          <div className='flex items-center justify-between w-full  my-10  px-3'>
             <img src={img3} alt="" />
             <img src={img6} alt="" />
             <img src={img1} alt="" />
             <img src={img2} alt="" />
             <img src={img5} alt="" />
             <img src={img4} alt="" />
             <img src={img1} alt="" />

          </div>

    </div>
    <div className='w-full '>
         <div className='w-[40%] m-auto text-center'>
            <h1 className='text-[36px] font-bold text-[#4d4d4d] mt-24'>Manage your entire community in a single system</h1>
            <p className='text-gray-500'>Who is Nextcent suitable for?</p>
         </div>
         <div className='w-[90%] m-auto flex items-center justify-evenly gap-5 mt-8 mb-22'>
             <div className='w-[28%] text-center'>
                  <img src={img8} alt=""  className='mx-auto' /> 
                  <div>
                     <h1 className='text-[36px] font-bold text-[#4d4d4d]'>Membership Organisations</h1>
                     <p className='text-gray-500'>Our membership management software provides full automation of membership renewals and payments.</p>
                    
                    </div> 
                    
             </div>


                 <div className='w-[28%] text-center'>
                  <img src={img9} alt=""  className='mx-auto'/> 
                  <div>
                     <h1 className='text-[36px] font-bold text-[#4d4d4d]'>National Associations</h1>
                     <p className='text-gray-500'>Our membership management software provides full automation of membership renewals and payments.</p>
                    
                    </div> 
                    
             </div>


                 <div className='w-[28%] text-center'>
                  <img src={img10} alt="" className='mx-auto'/> 
                  <div>
                     <h1 className='text-[36px] font-bold text-[#4d4d4d]'>Clubs And Similar Groups</h1>
                     <p className='text-gray-500'>Our membership management software provides full automation of membership renewals and payments.</p>
                    
                    </div> 
                    
             </div>

         </div>
    </div>
    </div>
  )
}

export default OurClients           