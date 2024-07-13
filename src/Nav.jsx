import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom'
function Nav() {
    return (
        <div className="nav">
            <div className="furniii">Furni<div className="dot">.</div> </div>
            <div className="fu">
                <ul>
                    <li>
                        <NavLink to='/' className="homii">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop' className="shopii">Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className="aboutt">About us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/service' className="services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog' className="blogs">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacts' className="contacts">Contactus</NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <RiContactsLine className="cont" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink >
                            <FaShoppingCart className="cart" />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Nav