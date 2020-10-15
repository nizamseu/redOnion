import React, { useContext } from 'react';
import Logo from '../../../src/resources/logo2.png';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useEffect } from 'react';
import Checkout from '../CheckOut/Checkout';
import { MyContext } from '../../App';

const Navbar = () => {
  
    const[cart,]=useContext(MyContext)
    console.log("data Option",cart);
    console.log("len",cart.length);

    return (
        <div  className=" logo shadow-sm p-3 mb-5 bg-white rounded">
 
            <div>
            <img src={Logo} alt=""/>
            </div>
            <div className="sign d-flex align-items-center">
             <p>count: {cart.length} me</p>
                {/* <a href = "#" className="signIn" > Sign In</a> */}
                <button className="signUP">
                    Sign Up
                </button>
               
            </div>

            <div>
                <h1>THIS IS NAV BAR</h1>
            </div> 
        </div>
    );
};

export default Navbar;