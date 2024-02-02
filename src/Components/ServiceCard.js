import React, { useContext } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const ServiceCard = ({data}) => {
    const {setCatogary,filterHandle} = useContext(AppContext);

  return (
    <div className='bg-[#fff] max-w-[390px] flex  group hover:bg-lightPurple rounded-md transition-all duration-200
    shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <div className='px-6 py-8 h-full flex flex-col justify-between items-start'>
            <div className='flex flex-row gap-x-4'>
                <div className='rounded-full p-1 flex justify-center items-center bg-offWhite group-hover:bg-[#fff]'>
                    <img src={data.image} className='h-[26px] p-1'/>
                </div>
                <div className='text-2xl font-semibold group-hover:text-[#fff]'>
                  {data.title}
                </div>
            </div>
            <div className='my-4 opacity-70 text-sm group-hover:text-[#fff]'>
                {data.Description}
            </div>
            <NavLink to="/courses">
                <div className='flex flex-row items-baseline justify-center gap-x-4 text-lg font-semibold group-hover:text-[#fff]'>
                    <button onClick={() => filterHandle(data.id)}>
                        Learn More
                    </button>
                    <div>
                    <IoIosArrowForward/>
                    </div>
                </div>
            </NavLink>
           
        </div>
    </div>
  )
}

export default ServiceCard