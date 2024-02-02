import React, {  useContext, useState } from 'react'
import { filterData } from '../Data/filterData';
import Filter from '../Components/Filter';
import Cards from '../Components/Cards';
import Spinner from '../Components/Spinner';
import {data} from '../Data/Data';
import { AppContext } from '../Context/AppContext';

const Courses = () => {
  const [loader,setLoader] = useState(false);
  const {catogary,setCatogary} = useContext(AppContext);

  // async function fetchData() {
  //        setLoader(true);
  //        try{
  //          const res = await fetch(apiUrl);
  //          const output = await res.json();
  //          setCourse(output.data);
  //          console.log(course);
  //        }
  //        catch{
  //          toast("Something Went Wrong!");
  //        }
  //        setLoader(false);
  // }
  // useEffect( () => {
  //   fetchData();
  // },[]);

  return (
    <div className=' w-full flex flex-wrap gap-x-32'>
         <Filter filterData={filterData} catogary={catogary} setCatogary={setCatogary} />
         {
           loader ? <Spinner/> : <Cards course={data} catogary={catogary}/>
         }
    </div>
  )
}

export default Courses