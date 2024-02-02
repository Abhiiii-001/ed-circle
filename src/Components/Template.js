
import frameImage from '../Assests/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm';
import {FcGoogle} from 'react-icons/fc'
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const Template = ({title,desc1,desc2,image,formtype}) => {
  const {setLogged} = useContext(AppContext);
    return(
        <div className='flex flex-row w-11/12 max-w-[1160px] justify-between py-12 mx-auto gap-x-12 gap-y-0 mt-[70px]'>

              <div className='w-11/12 max-w-[450px]'>
                
                 <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem] '
                 >{title}</h1>
                 <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                     <span className='text-white'>{desc1}</span><br/>
                     <span className=' text-lightPurple italic font-semibold'>{desc2}</span>
                 </p>

                 {formtype === "signup"?
                 <SignupForm/>:
                 <LoginForm/> }

                 <div className='flex flex-row w-full items-center my-4 gap-x-2'>
                    <div className='h-[1px] w-full bg-deepBlue'></div>
                    <p className='text-slate-700 font-medium leading-[1.375rem]'>OR</p>
                    <div className='h-[1px] w-full bg-deepBlue'></div>
                 </div>

                 <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-slate-300
                 border border-slate-300 px-[12px] py-[8px] gap-x-2 mt-6'>
                   <FcGoogle/>
                   <p> Sign Up with Google</p>
                 </button>

              </div>

              <div className='relative w-11/12 max-w-[450px] mt-8 '>
                {/* <div className='w-[558px] h-[504px] absolute -top-4 right-4 bg-lightPurple'></div> */}
                {/* <img src={frameImage} alt='pattern'
                className=' bg-lightPurple'
                width={558}
                height={504}
                loading='lazy'/> */}

                <img src={image} alt='studnt'
                width={558}
                height={504}
                loading='lazy'
                className='absolute -top-4 right-4 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]'
                />

              </div>

        </div>
    );
}

export default Template;