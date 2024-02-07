import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

function Contact1(){
  
  
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
                  <div className="locationdiv">
                <div className='locate'><NavLink><FaLocationDot className='locate1'/></NavLink></div>
                <div className="loname">43 Raymouth Rd. Baltemoer, London 3910</div>
                </div>
                <div className="maildiv">
                <div className='mail'><NavLink><IoMdMail className='mail1'/></NavLink></div>
                <div className="mailname">info@yourdomain.com</div>
                </div>
                <div className="phdiv">
                <div className='tele'><NavLink><FaPhone className="tele1"/></NavLink></div>
                <div className="telename">+1 294 3925 3939</div>
                </div>
                </div>
          
        
                   
                </div>
            </div>
    </div>)
}
export default Contact1
