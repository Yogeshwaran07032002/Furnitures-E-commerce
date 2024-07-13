import im from './images/truck.svg';
import imm from './images/bag.svg';
import imma from './images/support.svg';
import immb from './images/return.svg';
import Carousel from 'react-bootstrap/Carousel';
import sobapng from './images/sofa.png';
import { FaPaperPlane } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
function Service1() {
    return (<div>
        <div className="servicefirstpage">

            <div className="modi">
                <div className="modservice">Services</div>
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
        {/* service page2 */}
        <div className="servicepagetwo">
            <div className='serpages'>
                <div className='serpages1'>
                    <div className='serpages2'>
                        <div className="truckone1">
                            <div className='trucks'>
                                <div className="truck"> <img src={im} alt="image" /></div>
                                <div className='circle1'></div>
                            </div>
                            <div className="d1">Fast & Free Shipping</div>
                            <div className="d2">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                            </div>
                        </div>
                        <div className="bagone1">
                            <div className='bags'>
                                <div className="bag"> <img src={imm} alt="image" /></div>
                                <div className='circle2'></div>
                            </div>
                            <div className="d11">Easy to Shop
                            </div>
                            <div className="d22">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                            </div>
                        </div>

                        <div className="truckone2">
                            <div className='trucks'>
                                <div className="truck"> <img src={im} alt="image" /></div>
                                <div className='circle1'></div>
                            </div>
                            <div className="d1">Fast & Free Shipping</div>
                            <div className="d2">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                            </div>
                        </div>
                        <div className="bagone2">
                            <div className='bags'>
                                <div className="bag"> <img src={imm} alt="image" /></div>
                                <div className='circle2'></div>
                            </div>
                            <div className="d11">Easy to Shop
                            </div>
                            <div className="d22">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                            </div>
                        </div>
                    </div>
                    <div className='serpages3'>
                        <div className="supone1">
                            <div className='supports'>
                                <div className="support"> <img src={imma} alt="image" /></div>
                                <div className='circle3'></div>
                            </div>
                            <div className="d111">24/7 Support</div>
                            <div className="d222">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                            </div>
                        </div>

                        <div className="returnone1">
                            <div className='returns'>
                                <div className="return"> <img src={immb} alt="image" /></div>
                                <div className='circle4'></div>
                            </div>
                            <div className="d1111">Hassle Free Returns</div>
                            <div className="d2222">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                            </div>
                        </div>

                        <div className="supone2">
                            <div className='supports'>
                                <div className="support"> <img src={imma} alt="image" /></div>
                                <div className='circle3'></div>
                            </div>
                            <div className="d111">24/7 Support</div>
                            <div className="d222">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                            </div>
                        </div>

                        <div className="returnone2">
                            <div className='returns'>
                                <div className="return"> <img src={immb} alt="image" /></div>
                                <div className='circle4'></div>
                            </div>
                            <div className="d1111">Hassle Free Returns</div>
                            <div className="d2222">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        {/* page 3 ////////// */}
        <div className='shopings'>
            <div className="p2">
                <div className="c">
                    <div className="cr">Crafted with excellent material.</div>
                    <div className="cr1">
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                    </div>
                    <div className="cr2">Expolre</div>
                </div>

                {/* <div className="effect"></div> */}
                <div className="i">
                    <div className="i1">
                        <div className="iimage1"></div>
                        {/* <img src={im} alt="image" /> */}
                        <div className="i2">Nordic Chair</div>
                        <div className="i3">$50.00</div>
                        <div className="plus"></div>
                    </div>
                </div>

                <div className="j">
                    <div className="j1">
                        <div className="iimage2"></div>
                        {/* <img src={im} alt="image" /> */}
                        <div className="j2">Nordic Chair</div>
                        <div className="j3">$50.00</div>
                        <div className="plusone"></div>
                    </div>
                </div>

                <div className="j">
                    <div className="j1">
                        <div className="iimage3"></div>
                        {/* <img src={im} alt="image" /> */}
                        <div className="k2">Nordic Chair</div>
                        <div className="k3">$50.00</div>
                        <div className="plustwo"></div>
                    </div>
                </div>

            </div>
        </div>
        {/* page4 corosel */}
        {/* page5/////////////////////////// */}
        <div className='caropage'>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <div className="hh">
                        <div className="hh1">Testimonials </div>
                        <div className="hh2">
                            “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”
                        </div>
                        <div className="pic">
                            <div className="pic1"></div>
                            <div className="pic2">Maria Jones</div>
                            <div className="pic3">CEO, Co-Founder, XYZ Inc.</div>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="hh">
                        <div className="hh1">Testimonials </div>
                        <div className="hh2">
                            “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”
                        </div>
                        <div className="pic">
                            <div className="pic1"></div>
                            <div className="pic2">Maria Jones</div>
                            <div className="pic3">CEO, Co-Founder, XYZ Inc.</div>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="hh">
                        <div className="hh1">Testimonials </div>
                        <div className="hh2">
                            “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”
                        </div>
                        <div className="pic">
                            <div className="pic1"></div>
                            <div className="pic2">Maria Jones</div>
                            <div className="pic3">CEO, Co-Founder, XYZ Inc.</div>

                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>

        {/* contact page//////////// */}
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
                                <button type="button" className="custom-button"><FaPaperPlane className='paperplane' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sobasoba">
                    <img src={sobapng} alt="image" width={373} height={350} />
                </div>



                <div className='furnigreen'>
                    <div className='furnigreen1'>
                        <div className='furdot'>Furni.</div>
                        <div className='parah'><h6>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant.</h6></div>
                        <div className='iconsi'>
                            <div className='fb'><NavLink><FaFacebook className='fb1' /></NavLink></div>
                            <div className='twit'><NavLink><FaTwitter className='twit1' /></NavLink></div>
                            <div className='insta'><NavLink><FaInstagramSquare className="insta1" x /></NavLink></div>
                            <div className='indeed'><NavLink><FaLinkedin className='indeed1' /></NavLink></div>
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




    </div>)
}
export default Service1;
