import React from 'react';
import Logo from '../../../src/resources/logo2.png';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = (props) => {
    console.log(props.food);
    
    return (
        <div  className=" logo shadow-sm p-3 mb-5 bg-white rounded">

            <div>
            <img src={Logo} alt=""/>
            </div>
            <div className="sign d-flex align-items-center">
                <a href = "#" className="signIn" > Sign In</a>
                <button className="signUP">
                    Sign Up
                </button>
               
            </div>

            <div>
                <h1>this 1 is Nav</h1>
            </div> 
        </div>
    );
};

export default Navbar;