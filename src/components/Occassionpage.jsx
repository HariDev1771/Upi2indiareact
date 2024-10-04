import React from "react";
import { cards } from "../assetss/assets";
import { occassions } from "../assetss/occassion";
import { useNavigate } from "react-router-dom";

const Occassionpage = () => {
  const navigate=useNavigate();
  const handleclickoccasion=()=>{
    navigate('/occasioncard')
  }
  const scroll = (direction) => {
    const scrollContainer = document.getElementById("scrollableOccasions");
    const scrollAmount = direction === 'left' ? -100 : 100;
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };
  return (
    <div className="pt-10 px-2 lg:p-16 md:px-24 lg:px-28 flex flex-col gap-5">
      <div className="flex justify-between">
        <div class="w-[30%] bg-gray-200 rounded-full h-2.5 ">
          <div class="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
        </div>
        <div class="w-[30%] bg-gray-200 rounded-full h-2.5 ">
          <div class=" h-2.5 rounded-full w-[45%]"></div>
        </div>
        <div class="w-[30%] bg-gray-200 rounded-full h-2.5 ">
          <div class=" h-2.5 rounded-full w-[45%]"></div>
        </div>
      </div>

      <div>
        <h1 className=" text-xl lg:text-3xl font-bold  text-[#001463]">1.First,Select the Occasion</h1>
      </div>
      <div className="relative flex items-center px-2 py-3">
        {/* Left Scroll Button */}
        <button 
          className="absolute left-0 bg-white p-2 text-[#001463] z-10"
          onClick={() => scroll('left')}
        >
          &lt;
        </button>

        {/* Scrollable Occasions */}
        <div id="scrollableOccasions"  className="flex px-2 justify-around gap-2 h-16 lg:gap-8 overflow-x-auto scroll-smooth no-scrollbar">
          {occassions.map((item, index) => (
            <button
              key={index}
              onClick={handleclickoccasion}
              className="border-2 border-[#001463] h-[47px]  rounded-3xl text-md  lg:text-xl font-semibold px-2 text-[#001463]"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button 
          className="absolute right-0 bg-white p-2 text-[#001463] z-10"
          onClick={() => scroll('right')}
        >
          &gt;
        </button>
      </div>
      <div className=" flex gap-3 lg:gap-6 md:gap-6  justify-center flex-wrap mt-8">
        <img className="w-32 md:h-[219px] lg:h-auto md:w-auto lg:w-auto" src="/assets/anniversary.jpg"/>
        <img className="w-32 md:h-[219px] lg:h-auto md:w-auto lg:w-auto" src="/assets/birthday.jpg"/>
        <img className="w-32 md:h-[219px] lg:h-auto md:w-auto lg:w-auto" src="/assets/merrychristmas.jpg"/>
        <img className="w-32 md:h-[219px] lg:h-auto md:w-auto lg:w-auto" src="/assets/christmasred.jpg"/>
        <img className="w-32 md:h-[219px] lg:h-auto md:w-auto lg:w-auto" src="/assets/birthday.jpg"/>
        <img className="w-32 md:h-[219px] lg:h-auto md:w-auto lg:w-auto" src="/assets/birthday.jpg"/>
        <img className="w-32 md:h-[219px] lg:h-auto md:w-auto lg:w-auto" src="/assets/birthday.jpg"/>
        <img className="w-32 md:h-[219px] lg:h-auto md:w-auto lg:w-auto" src="/assets/birthday.jpg"/> 
        <img className="w-32 md:h-[219px] lg:h-auto md:w-auto lg:w-auto" src="/assets/birthday.jpg"/>
        <img className="w-32 md:h-[219px] lg:h-auto md:w-auto lg:w-auto" src="/assets/birthday.jpg"/>
        <img className="w-32 md:h-[219px] lg:h-auto md:w-auto lg:w-auto" src="/assets/birthday.jpg"/>
        <img className="w-32 md:h-[219px] lg:h-auto md:w-auto lg:w-auto" src="/assets/birthday.jpg"/>

        

      </div>

    </div>
  );
};

export default Occassionpage;
