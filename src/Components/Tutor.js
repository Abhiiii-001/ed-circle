import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Tutor = ({data}) => {
  return (
    <div className=' max-w-[250px] h-[300px] flex flex-col justify-between items-center bg-[#F9FAFB] p-[24px] 
    shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-center '>
        <div className='bg-lightorange rounded-full p-3 text-2xl'>
            <FaUserAlt/>
        </div>

        <p className=' leading-5 font-semibold pt-4 text-xl'>
            {data.name}
        </p>

        <p className='py-2 text-lightPurple font-semibold leading-5'>
            {data.position}
        </p>

        <p className='text-[#667085] text-[16px] leading-5'>
            {data.desc}
        </p>

        <div className='flex mt-3 gap-x-4 text-2xl text-[#667085]'>
            <a className='hover:text-lightorange transition-all duration-200' 
            href={data.linkedin} target='blank'>
                <FaLinkedin/>
            </a>
            <a className='hover:text-lightorange transition-all duration-200' 
             href={data.twitter} target='blank'>
                <FaTwitter/>
            </a>
        </div>

    </div>
  )
}

export default Tutor