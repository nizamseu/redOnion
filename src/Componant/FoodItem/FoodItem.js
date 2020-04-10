import React from 'react';
import data from '../../Data/data';
import { useState } from 'react';
import HomeComponant from '../HomeComponant/HomeComponant';
import Lunch from '../Lunch/Lunch';


const FoodItem = () => {
    const [userData,setUserData] = useState(data);
     const handlEvent= (dataReturn) => {
         console.log("clicked",dataReturn);
         
         
         
     }
    
    return (
        <div>
        <h1>Hello</h1>
           {
              userData.map(userdata => <Lunch handlEvent={handlEvent} usrData={userdata}></Lunch>)
           }
        </div>
    );
};

export default FoodItem;