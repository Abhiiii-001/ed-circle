import React from 'react'
import Tutor from './Tutor'
import { tutorsData } from '../Data/tutorsData'

const Tutors = () => {
  return (
    <div className='w-8/12 mx-auto flex flex-col items-center gap-y-4 my-8'>
         <p className='text-lightPurple text-[16px] font-semibold'>
            Tutors
         </p>
         <h2 className='text-4xl font-bold tracking-wide'>
           Meet the Heroes
         </h2>
         <p className='text-[#667085] text-[20px] text-center'>
            On Ed-Circle, instructors from all over the world instruct millions of students. We <br/> offer the knowledge and abilities.
         </p>
        <div className='w-full flex flex-row justify-between items-center mt-6 gap-x-6 flex-wrap'>
            {
                tutorsData.map((data,index) => {
                    return(
                        <Tutor data={data} key={index} />
                    )
                })
            }      
        </div>
    </div>
  )
}

export default Tutors