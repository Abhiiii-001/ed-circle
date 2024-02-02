import React, { useContext, useState } from 'react'
import Card from './Card'
import { AppContext } from '../Context/AppContext';
const Cards = () => {
  const[liked,setLiked] = useState('');
  const {getCourses} = useContext(AppContext);
  return (
    <div className='w-10/12 mx-auto flex flex-wrap justify-center gap-6 mb-4 my-6'>
        {
          getCourses().map((data) => {
            return(
              <Card key={data.id}
              data={data}
               liked={liked}
               setLiked={setLiked}/>
            )
          })
        }
    </div>
  )
}

export default Cards