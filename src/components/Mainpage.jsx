import React from 'react'
import { useNavigate } from 'react-router-dom'

const Mainpage = () => {
  const navigate=useNavigate()
  const handlesendbutton=()=>{
    navigate('/occasion')
  }
  return (
    <div className="pl-2 items-center pt-7 gap-36 min-h-screen bg-cover flex flex-col md:justify-between md:pt-12 md:px-20 md:pb-12 lg:justify-between lg:pt-12 lg:px-20 lg:pb-12" style={{backgroundImage:`url('/banner-img.jpg')`, }}>
        <div className='  h-[10rem]  lg:pl-3 lg:flex items-center'>
        <svg width="235" height="110" viewBox="0 0 235 141" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.936 101.496V122.232C9.936 124.504 10.528 126.248 11.712 127.464C12.896 128.648 14.56 129.24 16.704 129.24C18.88 129.24 20.56 128.648 21.744 127.464C22.928 126.248 23.52 124.504 23.52 122.232V101.496H30.288V122.184C30.288 125.032 29.664 127.448 28.416 129.432C27.2 131.384 25.552 132.856 23.472 133.848C21.424 134.84 19.136 135.336 16.608 135.336C14.112 135.336 11.84 134.84 9.792 133.848C7.776 132.856 6.176 131.384 4.992 129.432C3.808 127.448 3.216 125.032 3.216 122.184V101.496H9.936ZM61.2128 111.864C61.2128 113.656 60.7808 115.336 59.9167 116.904C59.0848 118.472 57.7568 119.736 55.9328 120.696C54.1408 121.656 51.8688 122.136 49.1168 122.136H43.5008V135H36.7808V101.496H49.1168C51.7088 101.496 53.9168 101.944 55.7408 102.84C57.5648 103.736 58.9248 104.968 59.8208 106.536C60.7488 108.104 61.2128 109.88 61.2128 111.864ZM48.8288 116.712C50.6848 116.712 52.0608 116.296 52.9568 115.464C53.8528 114.6 54.3008 113.4 54.3008 111.864C54.3008 108.6 52.4768 106.968 48.8288 106.968H43.5008V116.712H48.8288ZM72.7039 101.496V135H65.9839V101.496H72.7039ZM80.6873 127.416C83.7593 124.856 86.2073 122.728 88.0312 121.032C89.8553 119.304 91.3753 117.512 92.5913 115.656C93.8073 113.8 94.4153 111.976 94.4153 110.184C94.4153 108.552 94.0313 107.272 93.2633 106.344C92.4953 105.416 91.3113 104.952 89.7113 104.952C88.1113 104.952 86.8793 105.496 86.0153 106.584C85.1513 107.64 84.7033 109.096 84.6713 110.952H78.1433C78.2713 107.112 79.4073 104.2 81.5513 102.216C83.7273 100.232 86.4793 99.24 89.8073 99.24C93.4553 99.24 96.2553 100.216 98.2073 102.168C100.159 104.088 101.135 106.632 101.135 109.8C101.135 112.296 100.463 114.68 99.1193 116.952C97.7753 119.224 96.2393 121.208 94.5113 122.904C92.7833 124.568 90.5273 126.584 87.7433 128.952H101.903V134.52H78.1913V129.528L80.6873 127.416ZM113.626 101.496V135H106.906V101.496H113.626ZM148.921 135H142.201L126.985 112.008V135H120.265V101.448H126.985L142.201 124.488V101.448H148.921V135ZM167.274 101.496C170.794 101.496 173.882 102.184 176.538 103.56C179.226 104.936 181.29 106.904 182.73 109.464C184.202 111.992 184.938 114.936 184.938 118.296C184.938 121.656 184.202 124.6 182.73 127.128C181.29 129.624 179.226 131.56 176.538 132.936C173.882 134.312 170.794 135 167.274 135H155.562V101.496H167.274ZM167.034 129.288C170.554 129.288 173.274 128.328 175.194 126.408C177.114 124.488 178.074 121.784 178.074 118.296C178.074 114.808 177.114 112.088 175.194 110.136C173.274 108.152 170.554 107.16 167.034 107.16H162.282V129.288H167.034ZM196.688 101.496V135H189.968V101.496H196.688ZM223.872 128.616H210.528L208.32 135H201.264L213.312 101.448H221.136L233.184 135H226.08L223.872 128.616ZM222.048 123.24L217.2 109.224L212.352 123.24H222.048Z" fill="white"/>
<circle cx="73.5" cy="42.5" r="42.5" fill="#95C7D4" fill-opacity="0.5"/>
<circle cx="145.5" cy="42.5" r="42.5" fill="#95C7D4" fill-opacity="0.5"/>
</svg>
        </div>
        <div className='h-[228px] gap-2 w-[296px] lg:pl-3 md:h-[10rem] md:w-[740px] lg:h-[10rem] lg:w-[740px]  flex flex-col   lg:gap-0 '>
        <h2 className=' font-sans font-bold text-[28px] text-[#ffff] md:text-[40px] lg:text-[40px] custom-text-stroke'>India gifts: Instantly there</h2>
        <div className='flex flex-col items-center md:flex md:flex-row lg:flex lg:flex-row gap-3'><input className='h-14 p-2 w-[18rem] md:w-[33rem]  lg:w-[33rem] lg:p-3  placeholder-black text-xl outline-none' placeholder='Virtual Payment Address (VPA)'/>
        <button onClick={handlesendbutton} className=' bg-black p-3 text-white  text-xl w-20 rounded-md md:h-12 md:w-28 md:rounded-2xl lg:h-12 lg:w-28 lg:rounded-2xl'>SEND</button>
        </div>
        </div>
    </div>
  )
}

export default Mainpage