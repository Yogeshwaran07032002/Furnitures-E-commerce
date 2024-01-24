import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
function Contact1(){
  
  // const [email, setEmail] = useState('');
  // const [isValid, setIsValid] = useState(true);
  // const handleEmailChange = (event) => {
  //   const inputEmail = event.target.value;
  //   setEmail(inputEmail);

    
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const isValidEmail = regex.test(inputEmail);

  //   setIsValid(isValidEmail);
  
    return(<div>

     <div className="pageone2">
            
            <div className="modi">
            <div className="modabout">Contact</div>
            <div className="dua"> Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</div>
           <div className="shoping">Shop now</div>
            <div className="expo">Expolre</div>
            </div>
            <div className="soba">
                <div className="dotgreen">
            <div className="hero">
                </div>
            </div>
            </div>
            </div>
            {/* contact pages */}
            <div className="newcontact">
             
            </div>
    </div>)
}
export default Contact1
