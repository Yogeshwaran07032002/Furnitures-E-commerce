import React, { useEffect, useRef } from 'react';


function Shops() {

    return (
        <div className="p2">
                  <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
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
    )
}

export default Shops;