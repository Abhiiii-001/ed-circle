import React from "react";
import { RiSpeakLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import { TbBulb } from "react-icons/tb";
import {  FaLaptopCode } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import hero from '../Assests/hero.png';
import ring from '../Assests/Ring.svg'
import codecov from '../Assests/Codecov.svg'
import magicLoop from '../Assests/Magic Leap.svg'
import userTesting from '../Assests/UserTesting.svg'
import group from '../Assests/Group.svg'
import Circle from "./Circle";

const HeroSection = () => {
    return (
        <div className="w-8/12 mx-auto my-[120px] relative">
            {/* <Circle className="absolute right-0"/>
            <Circle/> */}
            <div className="w-full h-full flex flex-row justify-between items-center object-contain">

               <div className=" w-1/2 flex flex-col justify-center px-6 py-4 items-start gap-[50px]">
                        <h1 className=" font-bold text-6xl tracking-wider leading-[82px]">
                            Up Your <span className='text-lightPurple'>Skills</span><br/> To <span className='text-lightPurple'>Advance</span > Your <br/>
                            <span className='text-lightPurple'> Career</span> Path
                        </h1>

                        <p className="text-[#646464] tracking-wide">
                            Provides you with the latest online learning system and material <br/>
                            that help your knowledge growing.
                        </p>

                        <div className="flex flex-row gap-6">
                            <button  className='flex justify-center px-4 py-2 items-center text-lg font-semibold  border border-lightPurple rounded-md
                        bg-lightPurple text-[#fff] hover:shadow-lg'>
                                Get Started
                            </button>
                            <button  className='flex justify-center text-lightPurple bg-[#F4EBFF] px-4 py-2 items-center text-lg font-semibold 
                        hover:text-lightPurple rounded-md hover:shadow-lg'>
                                Get Free Trial
                            </button>
                        </div>

                        <div className="flex flex-row gap-[34px] text-[#1D2939B2] ">
                            <div className="flex flex-row justify-center items-center gap-2">
                            <RiSpeakLine className="text-[#F1BF5A] text-2xl"/>
                            <p>Public Speaking</p>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-2">
                            <IoBriefcaseOutline className="text-[#F4876B] text-2xl"/>
                            <p>Carrier Oriented</p>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-2">
                            <TbBulb className=" text-lightPurple text-2xl"/>
                            <p>Creative Thinking</p>
                            </div>
                        </div>
               </div>

                <div className="relative flex flex-col justify-center items-center -left-10">
                        <div className="w-[500px] h-[500px] border rounded-full border-lightPurple"></div>
                        

                        <div className=" absolute w-[500px] h-[500px] top-4 -bottom-4 left-4 -right-4 rounded-full bg-lightPurple overflow-hidden">
                             <img src={hero} className="absolute bottom-[2px] right-20 bg-no-repeat"/>
                        </div>


                        <div className="flex justify-center items-center gap-3 absolute -left-9 top-[120px]
                        px-4 py-2 border border-[#7F56D9] bg-[#fff] shadow-md rounded-xl z-20">
                        <FaLaptopCode className=" bg-lightPurple text-4xl text-[#fff] p-1 rounded-lg"/>
                        <div>
                                <p className=" font-bold text-3xl">2K+</p>
                                <p className="opacity-70">Video Courses</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-1 absolute -right-9 top-2
                        px-2 py-4 border border-[#7F56D9] bg-[#fff] shadow-md rounded-xl z-20">
                            <img src={ring}/>                    
                            <p className=' font-extrabold text-[25px] '>5K+</p>
                            <p className="opacity-70">Online Courses</p>

                        </div>
                        <div className="flex justify-center items-center gap-3 absolute -right-6 bottom-4
                        px-4 py-2 border border-[#7F56D9] bg-[#fff] shadow-md rounded-xl z-20">
                            <FaChalkboardTeacher className=" bg-lightPurple text-4xl text-[#fff] p-1 rounded-lg"/>
                            <div>
                                <p className="opacity-70">Tutors</p>
                                <p className="font-bold text-3xl">250+</p>
                            </div>
                        </div>
                </div>

            </div>
             <div className=" w-full px-2 pt-10 mt-10 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-3xl text-lightPurple">250+</p>
                    <p className="text-xl">Collaboration</p>
                  </div>
                  <img src={group}/>
                  <img src={codecov}/>
                  <img src={magicLoop}/>
                  <img src={userTesting}/>
            </div>
        </div>
     
    );
};

export default HeroSection;
