import React from 'react';
import './lunch.css'
import { Link } from 'react-router-dom';


const Lunch = (props) => {
    const {name,shortDetails,price,img,key}=props.usrData;
   
    return (
        <div className="lunch">
        <Link  to={"/view/" + key}  className="lunch-main" >
            
            { <div>
            <div className="lunch-img">
                 <img src={img} alt="" />
             </div>
             
             <div className="lunch-contant">
                 <h5> {name}</h5>
                 <p> {shortDetails} </p>
                 <h4>${price} </h4>
                 
             </div>
             
         </div>
         }
         
        
            
        </Link>
        </div>
    );
};

export default Lunch;