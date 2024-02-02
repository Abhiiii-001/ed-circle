import React from 'react'
import { faker } from '@faker-js/faker'
import Ellipse1 from './Ellipse1.svg'
import Ellipse2 from './Ellipse2.svg'
import Ellipse3 from './Ellipse3.svg'

const DoughNutChart = () => {
    const courseProgress = faker.datatype.number({min:20,max:90});
    const completeProgress = faker.datatype.number({min:20,max:courseProgress});
  return (
    <div className='w-[300px] rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
         <div className='flex flex-col px-2 py-3 gap-x-4 mt-2'>
            <div className='text-[#828282] uppercase text-lg mb-3'>Progress</div>
            <div className='relative h-[170px] flex justify-center items-center'>
                 <img src={Ellipse2} alt="ellipse" className='absolute z-20 left-[32%]' />   {/*voilet */}
                 <img src={Ellipse3} alt="ellipse" className='absolute z-0' />
                 <img src={Ellipse1} alt="ellipse" className='absolute z-30' />

                    <p className='relative left-5 text-4xl text-[#001C27] font-semibold'>
                        {courseProgress}%</p>
                    <p className='relative top-12 right-9 text-[#2D9CDB] font-bold text-lg'>
                        {completeProgress}%</p>

            </div>
            <div className='flex w-full justify-evenly px-3 my-4'>
                <div className='flex gap-x-1'>
                    <div className='w-1 h-4 bg-[#001C27]'></div>
                    <p className='text-md font-normal opacity-80'>Courses</p>
                </div>
                <div  className='flex gap-x-1 '>
                    <div className='w-1 h-4 bg-[#2D9CDB]'></div>
                    <p className='text-md font-normal opacity-80'>Complete</p>
                </div>
            </div>
         </div>
    </div>
  )
}

export default DoughNutChart