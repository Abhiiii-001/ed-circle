import React from 'react'
import ServiceCard from './ServiceCard'
import { serviceData } from '../Data/ServiceData'

const Home_service = () => {
  return (
    <div className='w-full'>
        <div className='w-full mx-auto text-center text-[16px] text-lightPurple font-semibold'>
            Our Services
        </div>
        <p className='text-4xl font-bold text-center my-6 '>
        Fostering a playful & engaging learning <br/> environment
        </p>

        <div className='flex flex-row w-8/12 justify-between gap-x-8 mx-auto my-8'>
          {
              serviceData.map((data,indx) => (
                 <ServiceCard data={data} key={indx} />
              ))
          }
        </div>
    </div>
  )
}

export default Home_service