import React from "react";
import Template from "../Components/Template";
import signupImg from "../Assests/signup.png"
const SignUp = () =>{
    
    return (
        <div>
           <Template
             title="Join the millions learning to code with Ed-Circle for free"
             desc1="Build skills for today , tommorow and beyond"
             desc2="Education to future-proof your carrier"
             image={signupImg}
             formtype="signup"
           />
        </div>
    );
}
export default SignUp;