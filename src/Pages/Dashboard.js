import React from 'react'
import BarChart from '../Components/dashboard/BarChart'
import DoughNutChart from '../Components/dashboard/DoughNutChart'
import { LiaGraduationCapSolid } from "react-icons/lia";
import { BsChatLeftText } from "react-icons/bs";
import { MdAssessment, MdOnlinePrediction } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { faker } from '@faker-js/faker';
// import Card from '../Components/Card'
import {data} from '../Data/Data';
import DashboardCourse from '../Components/dashboard/DashboardCourse';

const Dashboard = () => {
  let allCourses = [];
  const getCourses=()=>{
           Object.values(data).map((courseCatogary) => {
               courseCatogary.map((cou) => {
                    allCourses.push(cou);
               });
           });
      
      return allCourses;
   }
   getCourses();
 
   let coursesCount = faker.datatype.number({min:1,max:3});
   console.log(allCourses[faker.datatype.number({min:0,max:5})]);

  return (
    <div className='my-[120px] w-8/12 mx-auto h-full '>
      {/*left side bar */}
          <div className='w-[15%] h-[90vh] bg-[#1C1B1F] fixed top-[110px] text-[#E0E0E0]'>
             <div className=' text-3xl uppercase backdrop-opacity-80 py-6 px-2 font-semibold'>
               <span className='text-[40px]'>D</span>ashboard
             </div>

             <p className='mt-8 px-6 text-md'>Workspace</p>
             <div className='flex flex-col h-[78%] justify-between px-6 py-4'>
                <div className='flex flex-col gap-y-5'>
                    <button className='flex w-full px-6 py-3  items-baseline gap-x-6 text-lg'
                            >
                      <LiaGraduationCapSolid/>
                      <p>Courses</p>
                    </button>
                    <button className='flex w-full px-6 py-3 items-baseline gap-x-6 text-lg'>
                        <MdAssessment/>
                        <p>Assignment</p>
                    </button>
                    <button className='flex w-full px-6 py-3 items-baseline gap-x-6 text-lg'>
                       <BsChatLeftText/>
                       <p>Discussion</p>
                    </button>
                    <button className='flex w-full px-6 py-3 items-baseline gap-x-6 text-lg'>
                      <MdOnlinePrediction/>
                      <p>Live Events</p>
                    </button>
                </div>
                <div className='flex w-full items-center gap-x-4 text-lg'>
                  <div className='p-3 rounded-full bg-lightPurple'>
                   <FaUser/>
                  </div>
                   <p className=''>{faker.person.fullName()}</p>
                </div>

             </div>
          </div>
       {/* middle portion */}
          <div className='relative left-[320px] w-[74%] h-full'>
              <div>
                 <p className='text-lg text-[#828282]'>Overview</p>

                 <div className='flex w-full flex-wrap justify-between mt-3 mb-8'>
                  {/* first box */}
                    <div className='px-2 py-4 space-x-3 w-[180px] rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                       <div className='flex gap-x-1 text-sm items-center'>
                         <div className='p-1 rounded-md text-[#fff] bg-lightPurple'>
                            <LiaGraduationCapSolid/>
                         </div>
                            <p className='text-[#828282]'>Courses in progress</p>
                       </div>
                        <p className='mt-2 text-4xl font-semibold'>
                          {coursesCount}
                        </p>
                    </div>

                    <div className='px-2 py-4 space-x-3 w-[180px] rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                       <div className='flex gap-x-1 text-sm items-center'>
                         <div className='p-1 rounded-md text-[#fff] bg-lightPurple'>
                            <LiaGraduationCapSolid/>
                         </div>
                            <p className='text-[#828282]'>Assignment</p>
                       </div>
                        <p className='mt-2 text-4xl font-semibold'>
                          {faker.datatype.number({min:5,max:95})}%
                        </p>
                    </div>

                    <div className='px-2 py-4 space-x-3 w-[180px] rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                       <div className='flex gap-x-1 text-sm items-center'>
                         <div className='p-1 rounded-md text-[#fff] bg-lightPurple'>
                            <LiaGraduationCapSolid/>
                         </div>
                            <p className='text-[#828282]'>Hours Learning</p>
                       </div>
                        <p className='mt-2 text-4xl font-semibold'>
                          {faker.datatype.number({min:1,max:8})}h {faker.datatype.number({min:5,max:55})}m
                        </p>
                    </div>

                    <div className='px-2 py-4 space-x-3 w-[180px] rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                       <div className='flex gap-x-1 text-sm items-center'>
                         <div className='p-1 rounded-md text-[#fff] bg-lightPurple'>
                            <LiaGraduationCapSolid/>
                         </div>
                            <p className='text-[#828282]'>Community Score</p>
                       </div>
                        <p className='mt-2 text-4xl font-semibold'>
                          {faker.datatype.number({min:50,max:300})}
                        </p>
                    </div>


                 </div>

                 <div className='flex justify-between flex-wrap'>
                      <BarChart/>
                      <DoughNutChart/>
                 </div>

                 <p className='text-[#828282] text-lg font-normal uppercase mt-4 mb-3'>Your Courses</p>
                 <div className='flex flex-wrap justify-between items-center gap-y-10'> 
                    {
                      coursesCount >= 1 && <DashboardCourse data={allCourses[faker.datatype.number({min:0,max:5})]}/>
                    }
                    {
                      coursesCount >= 2 && <DashboardCourse data={allCourses[faker.datatype.number({min:6,max:10})]}/>
                    }
                    {/* {
                      coursesCount >= 3 && <DashboardCourse data={allCourses[faker.datatype.number({min:11,max:15})]}/>
                    } */}
                 </div>
              </div>
          </div>
          {/* right side bar */}
          {/* <div className='w-[20%]'></div> */}
    </div>
  )
}

export default Dashboard