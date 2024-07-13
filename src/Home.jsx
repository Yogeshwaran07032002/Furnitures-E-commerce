import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import t1 from './images/truck.svg';


import Shops from "./Shops";
import Abouts from "./Abouts";
import Aboutstwo from "./Aboutstwo";
import Blogs from "./Blogs"
import Contact from './Contact';
// import Contact1 from './Contact1';
function Home() {
    return (<div>
        <div className="pageone">

            <div className="modi">
                <div className="mod">Modern Interior Design Studio</div>
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


        {/* section2 */}
        <Shops />


        {/* section 3  and section5*/}
        <Abouts />

        {/* section 4 */}
        <Aboutstwo />

        {/* page 55555555555555555555555555555 */}

        <div className="page5">

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

        {/* section5 */}
        <Blogs />

        {/* section66666666666 */}
        <Contact />

        {/* Contact1 */}
        {/* <Contact1/> */}



    </div>
    );
}
export default Home;