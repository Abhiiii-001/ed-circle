import React from 'react'
import HeroSection from '../Components/HeroSection';
import Home_service from '../Components/Home_service';
import HomeCourses from '../Components/HomeCourses';
import Tutors from '../Components/Tutors';
import Footer from '../Components/Footer';
const Home = () => {
  return (
    <div className='w-full'>

      <HeroSection/>
      <Home_service/>
      <HomeCourses/>
      <Tutors/>
      {/* <Reviews/> */}
      <Footer/>
    </div>
  )
}

export default Home;