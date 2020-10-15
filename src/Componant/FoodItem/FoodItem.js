import React from 'react';
import data from '../../Data/data';
import { useState } from 'react';
import Lunch from '../Lunch/Lunch';


const FoodItem = () => {
    const [userData,setUserData] = useState(data);
     
    
    return (
        <div>
            <h1>Hello</h1>
           {
              userData.map(userdata => <Lunch usrData={userdata}></Lunch>)
           }

           
        </div>
    );
};

export default FoodItem;