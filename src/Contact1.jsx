import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";
function Contact1(){
  
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    // Basic email validation using a regular expression
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = regex.test(inputEmail);

    setIsValid(isValidEmail);
  };
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
                <div className="newcontact1">
                <div className='addresspage'>
                <div className='locate'><NavLink><FaLocationDot className='locate1'/></NavLink></div>
                <div className="loname">43 Raymouth Rd. Baltemoer, London 3910</div>
                <div className='mail'><NavLink><IoMdMail className='mail1'/></NavLink></div>
                <div className="mailname">info@yourdomain.com</div>
                <div className='tele'><NavLink><FaPhone className="tele1"/></NavLink></div>
                <div className="telename">+1 294 3925 3939</div>
                </div>
                <div className="subpagecont">
                    <div className="sub1">
                      First name
                        </div>    
             {/* <div className='namegmail'> */}
                        <div className='enamecont'
                             htmlFor="textInput">
                           <input
                           type="text"
                           id="textInput"
                          
                         />
                        </div>
                        <div className="subcont">
                      Last name
                      </div>
                        <div className='enamecont1'
                             htmlFor="email">
                           <input
                           type="email"
                           id="email"
                           name="email"
                           value={email}
                           onChange={handleEmailChange}
                           placeholder="Enter your email"
                           style={{ borderColor: isValid ? 'initial' : 'red' }} // Change border color if invalid
                         />
                         {!isValid && <p style={{ color: 'red' }}>Please enter a valid email address</p>}
                        </div>
             {/* </div> */}
        </div>
        
        <div className="mailmsg">
        <div className="subcont1">
                      Email Address
                      </div>
        <div className='gnamecont'
                          htmlFor="gmailInput">
                        <input
                        type="gmail"
                        id="gmailInput"
                     
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    
                       />
                     </div>
                     <div className="subcont2">
                        Message
                     </div>
                     <div className='gnamecont'
                          htmlFor="gmailInput">
                        <input
                        type="gmail"
                        id="gmailInput"
                     
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    
                       />
                     </div>
                     
                     </div>
                   
                </div>
            </div>
    </div>)
}
export default Contact1
