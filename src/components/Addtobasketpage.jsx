import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Addtobasketpage = () => {
  return (
    <div className="pt-10 px-2 lg:p-16 lg:px-28 flex flex-col gap-5">
         <div className="flex justify-between">
        <div class="w-[30%] bg-gray-200 rounded-full h-2.5 ">
          <div class="bg-blue-600 h-2.5 rounded-full "></div>
        </div>
        <div class="w-[30%] bg-gray-200 rounded-full h-2.5 ">
          <div class=" bg-blue-600 h-2.5 rounded-full "></div>
        </div>
        <div class="w-[30%] bg-gray-200 rounded-full h-2.5 ">
          <div class=" h-2.5 rounded-full w-[45%]"></div>
        </div>
      </div>
      <div>
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold  text-[#001463]">2. Surprise  /recipient's First Name/  with a gift amount!</h1>
      </div>
      <div className='flex flex-col md:flex md:justify-between  md:flex-row lg:flex lg:flex-row lg:justify-between'>
        <div className='flex w-[278px] h-[296px] lg:w-[438px] lg:h-[450px] justify-center items-center text-center bg-center bg-contain bg-no-repeat 'style={{backgroundImage:"url('/assets/reciept-shape.jpg')"}}>
            <p className='text-white text-4xl font-bold'>How much<br/>
                     would you like<br/>
                     to gift today?</p>
        </div>
        <div className='flex flex-col gap-2  justify-center'>
            <p>You send</p>
            <div  className='w-[275px] md:w-[328px] lg:w-[36rem] h-16 border-2 justify-between px-6 border-gray-400 rounded-lg flex items-center'>
                <img className='w-8 lg:w-10 ' src='/assets/flaguk.jpg'/> 
                <input className='w-60 lg:w-80 h-10 outline-none '/>
                <p className='text-2xl lg:text-4xl text-gray-500'>£</p>
            </div>
            <p>They recieve</p>
            <div  className='w-[275px] md:w-[328px] lg:w-[36rem] h-28 border-2 justify-between px-6 border-gray-400 rounded-lg flex items-center mb-3'>
            <img className='w-8 lg:w-10 ' src='/assets/flagind.jpg'/>  
            <input className='w-16 lg:w-40 h-10 outline-none'/>
            <div className='flex flex-col  '>
                <p className='text-xs md:text-md lg:text-xl font-bold  text-[#001463]'>Formula Followed:</p>
               
                <p className='text-xs md:text-md font-bold text-gray-500' >(£10.00 x ₹103.5)</p>
            </div>
            <p className='text-2xl lg:text-4xl  text-gray-500'>₹</p>
            </div>
          
               <div className='flex gap-40 md:gap-80 lg:gap-80'>
               <p className=' text-xl font-semibold  text-gray-500'>£ 2 fee</p>
             <div> <i className="fas fa-gift text-blue-600 text-3xl"></i></div> 
               </div>
            
            

        </div>

      </div>
    </div>
  )
}

export default Addtobasketpage