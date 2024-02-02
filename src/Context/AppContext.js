import { createContext } from "react";
import { filterData } from "../Data/filterData";
import { useState } from "react";
import {data} from '../Data/Data';

export const AppContext = createContext();

export default function AppContextProvider({children}){
  //login and signup details
    const [logged,setLogged] = useState(false);
    const [formData,setformData]= useState({
      firstname:"",
      lastname:"",
      email:"",
      password:"",
      confirmPassword:""
  });
  const [accountType,setAccountType] = useState("student");

  //courses details
    const [catogary,setCatogary] = useState(filterData[0].title);

    function filterHandle(data){
        setCatogary(data);
    }

    let allCourses = [];
    const getCourses=()=>{
        if(catogary === 'All'){
             Object.values(data).map((courseCatogary) => {
                 courseCatogary.map((cou) => {
                      allCourses.push(cou);
                 });
             });
        }
        else{
         allCourses = data[catogary];
        }
        return allCourses;
     }
 
  const value = {
    logged,
    setLogged,
    formData,
    setformData,
    accountType,
    setAccountType,
    catogary,
    setCatogary,
    filterHandle,
    allCourses,
    getCourses
  };


    return <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
};