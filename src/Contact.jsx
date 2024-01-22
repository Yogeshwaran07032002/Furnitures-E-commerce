import sobapng from './images/sofa.png';
import { FaPaperPlane } from "react-icons/fa6";
import {NavLink} from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
function Contact(){
    return(

       
   
    <div className="sectionseven">

              
     <div className="section7borders">
            
        <div className='subborder'>
         <div className="sub">
                    <div className="sub1">
                        <div className="sub2"></div>
                        <div className="sub3">Subscribe to Newsletter</div>
                        </div>    
             <div className='namegmail'>
                        <div className='ename'
                             htmlFor="textInput">
                           <input
                           type="text"
                           id="textInput"
                           placeholder="Enter your name"
                         />
                        </div>
                     <div className='gname'
                          htmlFor="gmailInput">
                        <input
                        type="gmail"
                        id="gmailInput"
                        placeholder="Enter your email"
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                        required='peleace valid email'
                       />
                     </div>
                <div className='paper'>
                    <button type="button" className="custom-button"><FaPaperPlane className='paperplane'/>
                    </button>
                </div>
             </div>
        </div>
        </div>
        <div className="sobasoba">
            <img src={sobapng} alt="image" width={373} height={350}/>
        </div>  
    
      
       
        <div className='furnigreen'>
           <div className='furnigreen1'>
            <div className='furdot'>Furni.</div>
            <div className='parah'><h6>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant.</h6></div>
            <div className='iconsi'>
                <div className='fb'><NavLink><FaFacebook className='fb1'/></NavLink></div>
                <div className='twit'><NavLink><FaTwitter className='twit1'/></NavLink></div>
                <div className='insta'><NavLink><FaInstagramSquare className="insta1"x/></NavLink></div>
                <div className='indeed'><NavLink><FaLinkedin className='indeed1'/></NavLink></div>
            </div>
           </div>
        <div className='htags'>
             <div className='abous1'>
                <p>About us</p>
                <p>Services</p>
                <p>Blog</p>
                <p>Contact us</p>
            </div>   
            <div className='abous2'>
                <p>Support</p>
                <p>Knowledge base</p>
                <p>Live chat</p>
            </div> 
            <div className='abous3'>
                <p>Jobs</p>
                <p>Our jobs</p>
                <p>Leadership</p>
                <p>Privacy Policy</p>
            </div> 
            <div className='abous4'>
                <p>Nordic Chair</p>
                <p>Kruzo Aero</p>
                <p>Ergonomic Chair</p>
            </div> 
         </div>
         <div className='terms'>
            <div className='untree'>Copyright ©2023. All Rights Reserved. — Designed with love by 
          
            <div className='unco'>Untree.co</div>
            <div className='unco1'> Distributed By ThemeWagon</div>
            </div>
            <div className='untree1'>
                <div className='untree2'><p>Terms & Conditions</p></div>
                <div className='untree3'><p> Privacy Policy</p></div>
            </div>
         </div>
         </div>
                
                
      </div>
   </div>
    );
}
export default Contact;
