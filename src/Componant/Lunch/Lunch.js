import React from 'react';
import './lunch.css'
import { Link } from 'react-router-dom';
import View from '../View/View';

const Lunch = (props) => {
    const {name,shortDetails,details,price,img,key}=props.usrData;
   
    return (
        <div className="lunch">
        <Link  to="/view"  className="lunch-main" >
            <button onClick={() => props.handlEvent(props.usrData)}>
            { <div>
            <div className="lunch-img">
                 <img src={img} alt="" />
             </div>
             
             <div className="lunch-contant">
                 <h1> {name}</h1>
                 <p> {shortDetails} </p>
                 <h1>$ {price} </h1>
                 
             </div>
             
         </div>
         }
            </button>
        
            
        </Link>
        </div>
    );
};

export default Lunch;