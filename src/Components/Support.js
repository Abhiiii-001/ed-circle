// ContactUsPage.js
import React, { useState } from 'react';
import Footer from './Footer';
import toast from 'react-hot-toast';
const Support = () => {
  const [formData,setformData] = useState({
    name:"",
    email:"",
    message:"",
  });
  const submitHandler = (event) =>{
         toast.success("Message Sent Successfully");
         setformData({
          name:"",
          email:"",
          message:"",
         });
  } 
  function changeHandler(event) {

    setformData( (prevData)=>(
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    
     ) );    
   }
  return (
   <div>
     <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your name"
              onChange={changeHandler}
              value={formData.name}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your email"
              value={formData.email}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Write your message here..."
              value={formData.message}
              required
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex items-center justify-end">
          <button className='flex justify-center px-4 py-2 items-center text-lg font-semibold  border border-lightPurple rounded-md
                            bg-lightPurple text-[#fff] hover:shadow-lg'>
                            Sumbit
                            </button>
          </div>
        </form>
      </div>
      
    </div>
    <Footer/>
   </div>
  );
};

export default Support;
