import React from "react";
import { cards } from "../assetss/assets";
import { occassions } from "../assetss/occassion";
import { useNavigate } from "react-router-dom";

const Occassionpage = () => {
  const navigate=useNavigate();
  const handleclickoccasion=()=>{
    navigate('/occasioncard')
  }
  return (
    <div className="p-16 px-28 flex flex-col gap-5">
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
        <h1 className="text-3xl font-bold  text-[#001463]">1.First,Select the Occasion</h1>
      </div>
      <div className="flex justify-around h-16 gap-8  py-3">
         {occassions.map((item,index)=>
         <button onClick={handleclickoccasion} className="border-2 border-[#001463] rounded-3xl text-xl font-semibold px-2 text-[#001463]">{item}</button>
        )}
      </div>

      <div className="flex gap-6 flex-wrap mt-8">
        <img src="/assets/anniversary.jpg"/>
        <img src="/assets/birthday.jpg"/>
        <img src="/assets/merrychristmas.jpg"/>
        <img src="/assets/christmasred.jpg"/>
        <img src="/assets/birthday.jpg"/>
        <img src="/assets/birthday.jpg"/>
        <img src="/assets/birthday.jpg"/>
        <img src="/assets/birthday.jpg"/>
        <img src="/assets/birthday.jpg"/>
        <img src="/assets/birthday.jpg"/>
        <img src="/assets/birthday.jpg"/>
        <img src="/assets/birthday.jpg"/>

        

      </div>

    </div>
  );
};

export default Occassionpage;
