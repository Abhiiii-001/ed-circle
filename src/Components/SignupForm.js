import { useContext, useState } from "react"
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import { AppContext } from "../Context/AppContext"

const SignupForm = () => {
   const navigate = useNavigate();
    const {formData,setformData,accountType,setAccountType,setLogged} = useContext(AppContext);
  
    // const [formData,setformData]= useState({
    //     firstname:"",
    //     lastname:"",
    //     email:"",
    //     password:"",
    //     confirmPassword:""
    // });
    // const [accountType,setAccountType] = useState("student");

  const [showPassword,setshowPassword]  = useState(false);
  const [showCurrPassword,setshowCurrPassword]  = useState(false);

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
            if(formData.password !== formData.confirmPassword){
                toast.error("Password do not match");
            }
            else{
                setLogged(true);
                toast.success("Account Created");
                const accountData = {
                    ...formData
                };    
               navigate('/dashboard');
            }
           
       }
    return(
        <div>

            <div className="flex bg-offWhite p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button
                onClick={() => setAccountType("student")}
                className={`${accountType==="student"
                ?"bg-deepBlue bg-opacity-20 text-white"
                :"bg-transparent text-white "}
                py-2 px-5 rounded-full transition-all duration-200`}> 
                    Student
                </button>
                <button
                 onClick={() => setAccountType("instructor")}
                 className={`${accountType==="instructor"
                 ?" text-white bg-deepBlue bg-opacity-20 "
                 :"bg-transparent text-white "
                 }py-2 px-5 rounded-full transition-all duration-200`}>
                    Instructor
                </button>
            </div>

             <form onSubmit={submitHandler}>
                    {/* first name and last name */}
                <div className="flex justify-between gap-x-4 mb-4">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-deepBlue mb-1 leading-[1.375rem]">
                            First Name <sup className="text-lightPurple">*</sup>
                        </p>
                        <input
                        required
                        type="text"
                        name="firstname"
                        onChange={changeHandler}
                        placeholder="Enter First Name"
                        value={formData.firstname}
                        className="bg-offWhite rounded-[0.5rem] text-slate-100 w-full p-[8px] "
                        />
                    </label>
                    <label className="w-full">
                        <p className="text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]">
                            Last Name <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                        required
                        type="text"
                        name="lastname"
                        onChange={changeHandler}
                        placeholder="Enter Last Name"
                        value={formData.lastname}
                        className="bg-offWhite rounded-[0.5rem] text-slate-100 w-full p-[8px] "
                        />
                    </label>
                </div>

                <label className="w-full">
                        <p className="text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]">
                            Email Address <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address"
                        value={formData.email}
                        className="bg-offWhite rounded-[0.5rem] text-slate-100 w-full p-[8px] "
                        />
                    </label>
                            
                            {/* password and confirmPassword */}
                    <div className="flex justify-between gap-x-4 mt-4">
                        <label className="w-full relative">
                            <p className="text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]">
                                Create Password <sup className="text-pink-200">*</sup>
                            </p>
                            <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            value={formData.password}
                            className="bg-offWhite rounded-[0.5rem] text-slate-100 w-full p-[8px] "
                            />
                            <span className="absolute right-3 top-[36px] cursor-pointer"
                             onClick={ () => setshowPassword( (prev)=>!prev)}>
                                {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>: <AiOutlineEye fontSize={24} fill="#AFB2BF"/>}
                            </span>
                        </label>
                        <label className="w-full relative">
                            <p className="text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]">
                                Confirm Password <sup className="text-pink-200">*</sup>
                            </p>
                            <input
                            required
                            type={showCurrPassword ? ("text") : ("password")}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            className="bg-offWhite rounded-[0.5rem] text-slate-100 w-full p-[8px] "
                            />
                            <span className="absolute right-3 top-[36px] cursor-pointer"
                             onClick={ () => setshowCurrPassword( (prev)=>!prev)}>
                                {showCurrPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):( <AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                            </span>
                        </label>

                     
                    </div>
                <button className="w-full mt-6 bg-lightorange rounded-[8px] font-medium text-black py-[8px] px-[12px]">
                    Create Account
                </button>
             </form>

        </div>
    )
}

export default SignupForm;