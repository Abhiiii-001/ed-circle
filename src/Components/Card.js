import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { ImUser } from "react-icons/im";

const Card = ({data,liked,setLiked}) => {
  return (
    <div className='max-w-[390px] rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]
    hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-105 transition-all
    duration-200 ease-in' >
      <div className='flex flex-col items-start p-[24px]'>
        <img src={data.image.url}
        className='h-[240px] flex justify-center items-center'/>
    
        <div className=' flex flex-row w-full justify-between items-baseline mt-8'>
          <h3 className='text-2xl font-semibold truncate'>
            {data.title}
            </h3>
          <span className='text-xl hover:text-lightorange'>
            <MdArrowOutward/>
          </span>
        </div>

        <div className='mt-2 text-[#667085] text-[16px]'>
          <p>{data.description.substr(0,110)+"..."}</p>
        </div>

        <div className='flex items-center justify-center gap-4 mt-2'>
          <p className='text-[#7F56D9] font-semibold '>
            {data.rating}
            </p>
          <div className='flex items-center justify-center gap-1 text-[#FF9B26]'>
            <IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/>
          </div>
        </div>

        <div className='w-full flex justify-between mt-4 p-1'>
              <div className='flex  justify-center  items-center gap-3'>
                <div className='flex rounded-full p-2 bg-lightorange text-xl'>
                  <ImUser/>
                  </div>
                <div className='flex flex-col text-xs'>
                  <p className='font-semibold'>{data.author}</p>
                  <p className='text-[#667085]'>{data.author_bg}</p>
                </div>
              </div>
              <div>
                <p className='text-[#7F56D9] text-2xl font-semibold'>
                  ₹{data.price}
                </p>
              </div>
        </div>
      </div>




    </div>
  )
}

export default Card