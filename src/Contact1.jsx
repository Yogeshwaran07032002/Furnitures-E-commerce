// import { NavLink } from "react-router-dom";
// import { FaLocationDot } from "react-icons/fa6";
// import { IoMdMail } from "react-icons/io";
// import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
function Contact1() {

    return (<div>

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

        {/* CONTACT PAGES */}

        <div className="cons">
            <div className="adddiv">
                <div className="locationdiv">
                    <div className="lologo"><FaLocationDot className="FaLocationDot" /></div>
                    <div className="locationadd">
                        43 Raymouth Rd. Baltemoer, London 3910
                    </div>
                    <div className="maillogo"><SiGmail className="SiGmail " /> </div>
                    <div className="maillo">info@yourdomain.com</div>
                    <div className="phonelogo"><FaPhone className="FaPhone" /></div>
                    <div className="phonelo">+91 8839937444</div>
                </div>

            </div>

        </div>

    </div>)
}
export default Contact1
