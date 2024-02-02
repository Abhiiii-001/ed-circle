import React, { useContext } from 'react'
import logo from '../Assests/logo.svg'
import { Link} from 'react-router-dom';
import toast from 'react-hot-toast';
import { AppContext } from '../Context/AppContext';

const Navbar = () => {
    const {logged,setLogged} = useContext(AppContext);
  return (
    <div className='w-full flex justify-center items-center fixed bg-[#fff] top-0 py-8 z-50'>
        <nav className='flex w-8/12 mx-auto justify-between'>
            <div className='flex px-3 py-2 gap-3 justify-center items-center'>
                <img src={logo} alt='logo'/>
                <Link to='/'>
                    <h3 className=' text-darkBlack font-bold leading-3 tracking-wide text-xl'>Ed-Circle</h3>
                </Link>
            </div>
             
            <div>
                <ul className='flex text-darkBlack px-3 py-2 text-lg font-semibold gap-12 justify-center items-center'>
                        <li className=' hover:text-lightPurple' >
                            <Link to='/'>Home</Link>
                        </li>
                        <li className=' hover:text-lightPurple' >
                            <Link to='/courses'>Courses</Link>
                        </li>
                        <li className=' hover:text-lightPurple'>
                            <Link to='/support'>Support</Link>
                        </li>
                         <li className=' hover:text-lightPurple'>
                            <Link to='/about'>About Us</Link>
                        </li> 
                </ul>
            </div>

            <div className='flex gap-5'>
                    {/* When not login user */}
                   {
                    !logged &&
                      <Link to='/login'>
                            <button className='flex justify-center text-lightPurple bg-[#F4EBFF] px-4 py-2 items-center text-lg font-semibold  
                            hover:text-lightPurple rounded-md hover:shadow-lg'>
                            Log In
                            </button>
                      </Link>
                   }
                   {
                    !logged &&
                       <Link to='/signup'>
                            <button className='flex justify-center px-4 py-2 items-center text-lg font-semibold  border border-lightPurple rounded-md
                            bg-lightPurple text-[#fff] hover:shadow-lg'>
                            Create free account
                            </button>
                       </Link>
                   }
                     {/* When user logged */}
                   {
                    logged &&
                        <Link to='/dashboard'>
                            <button className='flex justify-center text-lightPurple bg-[#F4EBFF] px-4 py-2 items-center text-lg font-semibold  
                            hover:text-lightPurple rounded-md hover:shadow-lg'>
                            Dashboard
                            </button>
                        </Link>
                   }
                   {
                    logged &&
                        <Link to='/'>
                            <button onClick={ () => {
                                 setLogged(false);
                                 toast.success('Logged Out');
                                }}
                             className='flex justify-center px-4 py-2 items-center text-lg font-semibold  border border-lightPurple rounded-md
                            bg-lightPurple text-[#fff] hover:shadow-lg'>
                            Log Out
                            </button>
                        </Link>
                   }

                
                 
            </div>
        </nav>

       
    </div>
  )
}

export default Navbar;