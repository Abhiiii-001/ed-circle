import React from 'react'
import logo from '../Assests/logo.svg'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full bg-[#101828] flex flex-col space-y-16 mt-20'> 
        <div className='flex flex-row flex-wrap gap-x-20 mt-16 w-8/12 mx-auto '>
             <div className=' max-w-[320px] space-y-10'>
                <div className='flex gap-x-2 '>
                    <img src={logo} alt='logo' />
                    <span className='text-xl font-bold text-[#fff]'>Ed-Circle</span>
                </div>
                 <div className='text-[#EAECF0] text-[16px] font-normal'>Top learning experiences that create more talent in the world.</div>
             </div>
             <div className='flex flex-row w-8/12 justify-between text-[#EAECF0]'>
                     <div className='flex flex-col gap-y-3'>
                        <div className='text-offWhite font-semibold opacity-80 mb-2'>Product</div>

                        <a href='/' className='hover:text-lightPurple transition-all duration-200 '>Overview</a>
                        <a href='/' className='hover:text-lightPurple transition-all duration-200 '>Feature</a>
                        <a href='/' className='hover:text-lightPurple transition-all duration-200 '>Solutions</a>
                        <a href='/' className='hover:text-lightPurple transition-all duration-200 '>Tutorials</a>
                        <a href='/' className='hover:text-lightPurple transition-all duration-200 '>Pricing</a>
                     </div>
                     <div className='flex flex-col gap-y-3'>
                        <div className='text-offWhite font-semibold opacity-80 mb-2'>Company</div>

                        <a href='/' className='hover:text-lightPurple transition-all duration-200 '>About Us</a>
                        <a href='/' className='hover:text-lightPurple transition-all duration-200 '>Carrier</a>
                        <a href='/' className='hover:text-lightPurple transition-all duration-200 '>Press</a>
                        <a href='/' className='hover:text-lightPurple transition-all duration-200 '>News</a>
                     </div>
                     <div className='flex flex-col gap-y-3'>
                        <div className='text-offWhite font-semibold opacity-80 mb-2'>Social</div>

                        <a href='/' className='hover:text-lightPurple transition-all duration-200 '>Twitter</a>
                        <a href='/' className='hover:text-lightPurple transition-all duration-200 '>Linkedin</a>
                        <a href='/' className='hover:text-lightPurple transition-all duration-200 '>Github</a>
                        <a href='/' className='hover:text-lightPurple transition-all duration-200 '>Dribble</a>
                     </div>
                     <div className='flex flex-col gap-y-3'>
                        <div className='text-offWhite font-semibold opacity-80 mb-2'>Legal</div>

                        <a href='/' className='hover:text-lightPurple transition-all duration-200 '>Term</a>
                        <a href='/' className='hover:text-lightPurple transition-all duration-200 '>Privacy</a>
                        <a href='/' className='hover:text-lightPurple transition-all duration-200 '>Cookies</a>
                        <a href='/' className='hover:text-lightPurple transition-all duration-200 '>Contact</a> 
                     </div>
             </div>
        </div>



        <div className='w-8/12 mx-auto flex justify-between pb-16 items-baseline'>
            <div className='text-[#98A2B3]'>
                © 2024 Ed-Circle. All rights reserved.
            </div>
            <div className='flex text-offWhite gap-x-6 text-2xl'>
               <a href='/'
               className='hover:text-lightPurple transition-all duration-200'>
                  <FaLinkedin/>
               </a>
               <a href='/'
               className='hover:text-lightPurple transition-all duration-200'>
                  <FaTwitter/>
               </a>
               <a href='/'
               className='hover:text-lightPurple transition-all duration-200'>
                  <FaGithub/>
               </a>
               <a href='/'
                className='hover:text-lightPurple transition-all duration-200'>
                  <FaSquareFacebook/>
               </a>
               <a href='/'
               className='hover:text-lightPurple transition-all duration-200'>
                  <FaDribbble/>
               </a>
            </div>
        </div>
        
    </div>
  )
}

export default Footer