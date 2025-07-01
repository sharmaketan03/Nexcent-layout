import React from 'react';
import img1 from "../assets/Iconmember.svg";
import img2 from "../assets/payment.svg";
import img5 from "../assets/Vector  event.svg";
import img4 from "../assets/Group 2clubs.svg";

function BookingsSection() {
  return (
    <div className="bg-[#f5f7fa] py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        
        
        <div className="w-full lg:w-[40%] text-center lg:text-left">
          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4D4D4D]">
            Helping a local
          </h1>
          <h1 className="text-[28px] md:text-[36px] font-bold text-[#4caf4f]">
            business reinvent itself
          </h1>
          <p className="mt-4 text-[#6b7280] text-[15px]">
            We reached here with our hard work and dedication.
          </p>
        </div>

     
        <div className="w-full lg:w-[50%] grid grid-cols-1 md:grid-cols-2 gap-6">
       
          <div className="flex items-center gap-4">
            <img src={img1} alt="Members" className="w-10 h-10" />
            <div>
              <h1 className="text-[20px] md:text-[24px] font-semibold text-[#4D4D4D]">2,245,341</h1>
              <p className="text-[#6b7280] text-sm">Members</p>
            </div>
          </div>

         
          <div className="flex items-center gap-4">
            <img src={img4} alt="Clubs" className="w-10 h-10" />
            <div>
              <h1 className="text-[20px] md:text-[24px] font-semibold text-[#4D4D4D]">46,328</h1>
              <p className="text-[#6b7280] text-sm">Clubs</p>
            </div>
          </div>

       
          <div className="flex items-center gap-4">
            <img src={img5} alt="Events" className="w-10 h-10" />
            <div>
              <h1 className="text-[20px] md:text-[24px] font-semibold text-[#4D4D4D]">828,267</h1>
              <p className="text-[#6b7280] text-sm">Event Bookings</p>
            </div>
          </div>

        
          <div className="flex items-center gap-4">
            <img src={img2} alt="Payments" className="w-10 h-10" />
            <div>
              <h1 className="text-[20px] md:text-[24px] font-semibold text-[#4D4D4D]">1,926,436</h1>
              <p className="text-[#6b7280] text-sm">Payments</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BookingsSection;
