import React, { useState } from "react";
import Template from "../Components/Template";
import loginImg from "../Assests/login.png"
const LogIn = () =>{
    
    return (
        <div>
           <Template
             title="Welcome Back"
             desc1="Build skills for today , tommorow and beyond"
             desc2="Education to future-proof your carrier"
             image={loginImg}
             formtype="login"
           />
        </div>
    );
}
export default LogIn;