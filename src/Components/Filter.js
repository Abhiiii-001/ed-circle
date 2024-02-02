import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Filter = ({filterData,catogary}) => {
 
    const {filterHandle} = useContext(AppContext);
  return (
    <div className='w-full mt-[110px] mx-auto flex justify-center space-x-10 items-center py-2 bg-[#38598b]'>
         {
            filterData.map((data) => {
                return(
                    <button className={` text-lg px-2 rounded-md font-medium text-deepBlue bg-[#9cd3d3] hover:text-lightPurple 
                    ${catogary===data.title?"bg-opacity-80 border-2 bg-lightorange border-[#fff]":"bg-opacity-60 border-transparent"}`}
                    key={data.id}
                    onClick={()=>filterHandle(data.title)}>
                        {data.title}
                    </button>
                )
            })
         }
    </div>
  )
}

export default Filter