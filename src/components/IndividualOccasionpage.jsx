import React from 'react'
import { cards } from '../assetss/assets'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IndividualOccasionpage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleleftclick =() =>{
   setSelectedImageIndex((pindex)=>(pindex===0? cards.length-1 :pindex-1))
  }
  const handlerightclick =() =>{
   setSelectedImageIndex((pindex)=>(pindex===cards.length-1?0:pindex+1  ))
  }
  const handlethumbnailclick=(key) =>{
    setSelectedImageIndex(key);
  }
  const navigate=useNavigate()
  const handlecart=()=>{
   navigate("/addtobasket")
  }

  return (
    <div className='flex flex-col gap-3'>
        <div className='h-20  shadow-lg flex items-center px-32'>
                <div className="flex w-[100%] gap-8 justify-end pr-10">
                  <button className='h-12 w-36 border-2 font-semibold text-red-500 border-red-500 rounded-lg '>Edit Design</button>
                  <button onClick={handlecart} className='h-12 w-40 bg-red-500 font-semibold text-white rounded-lg'> Add to Basket</button>
                </div>
        </div>
        <div className='flex justify-center items-center  h-[38rem]'>
          <img className='w-[24rem]' src={cards[selectedImageIndex]}/>
        </div>
        <div className='h-38 border-t-2 flex gap-10 justify-center '>
          <button onClick={handleleftclick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
  <path d="M15.41 16.58L10.83 12l4.58-4.58L14 6l-6 6 6 6z"/>
</svg>
          </button>
            <div className='w-[24rem] flex justify-between '>
             {cards.map((item,index)=>
             <img key={index} onClick={()=> handlethumbnailclick(index)} className={`w-[5rem] ${index==selectedImageIndex ? "border-2 border-red-500":""}`} src={item}/>
            )}
            </div>
            <button onClick={handlerightclick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
  <path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
</svg>

            </button>
        </div>
    </div>
  )
}

export default IndividualOccasionpage