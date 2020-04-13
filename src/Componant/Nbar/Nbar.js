import React from 'react';
import Logo from '../../../src/resources/logo2.png';
import Lunch from '../Lunch/Lunch';
const Nbar = () => {
   
    return (
        <div>

        <div  className=" logo">

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
            
                <h1>this is Nav</h1>
            </div>

        </div>
            
        </div>
    );
};

export default Nbar;