import React from 'react'
import { data } from '../Data/Data'
import Card from './Card'
import { NavLink } from 'react-router-dom'
const HomeCourses = () => {
  return (
    <div className='my-[120px] flex flex-col w-8/12 justify-center items-start mx-auto'>
        <div className='w-full'>
            <p className='text-lightPurple text-sm font-semibold'>
                Explore Programs</p>
            <p className='text-4xl font-bold my-3'>
                Our Most Popular Class</p>
            <p className='text-[#667085] text-sm self-stretch my-4'>
                Let's join our famous class, the knowledge provided will definitely be useful for you.</p>
            <div className='flex w-full items-center justify-between flex-wrap mt-10'>
                <Card data={data.Development[3]}/>
                <Card data={data.Business[2]}/>
                <Card data={data.Design[0]}/>
            </div>
            <NavLink to="/courses">
              <div className='w-full text-center mt-12'>
                <button className='border border-[#D0D5DD] bg-[#F9FAFB] shadow-md rounded-md py-2 px-4 font-semibold text-sm
                hover:bg-lightPurple hover:text-[#fff] transition-all duration-200'>
                  Explore Programs
                </button>
              </div>    
            </NavLink>
        </div>
    </div>
  )
}

export default HomeCourses