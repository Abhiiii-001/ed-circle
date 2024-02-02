import React, { useContext, useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import {Link,useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import { AppContext } from "../Context/AppContext";
const LoginForm = () => {
    const {setLogged} = useContext(AppContext);
    const navigate = useNavigate();

    const [formData,setformData] = useState({
        email:"",password:""
    });

      const[showPassword,setshowPassword] = useState(false)
    
   function changeHandler(event) {

    setformData( (prevData)=>(
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    
     ) );

   }

function submitHandler(event) {
   event.preventDefault();
   setLogged(true);
   toast.success("Logged In");
   navigate('/dashboard');
}
    return (
        <div>
            <form onSubmit={submitHandler}
            className="flex flex-col w-full gap-y-4 mt-6">
                <label className="w-full ">
                    <p className="text-[0.875rem] text-deepBlue mb-1 leading-[1.375rem]">
                        Email Address<sup className=" text-lightPurple">*</sup>
                    </p>
                    <input 
                    required
                    type="text"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter email id"
                    name="email"
                    className=" bg-offWhite rounded-[0.5rem] text-deepBlue w-full p-[8px] "
                    />
                </label>
                <label className="w-full relative">
                    <p className="text-[0.875rem] text-deepBlue mb-1 leading-[1.375rem]">
                        Password<sup className="text-lightPurple">*</sup>
                    </p>
                    <input 
                    required
                    type={showPassword ? ("text") : ("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter password"
                    name="password"
                    className="bg-offWhite rounded-[0.5rem] text-deepBlue w-full p-[8px] "
                    />
                    <span className="absolute right-3 top-[38px] cursor-pointer"
                     onClick={ () => setshowPassword( (prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                    </span>
                    <Link to='#'>
                        <p className="text-xs mt-1 max-w-max text-deepBlue ml-auto">
                            Forget Password
                        </p>
                    </Link>
                </label>             
                <button className=" bg-lightorange rounded-[8px] font-medium text-black py-[8px] px-[12px]">
                    Sign Up
                </button>
               
            </form>
        </div>
    );
}
export default LoginForm;