import React from 'react';
import data from '../../Data/data'
import { useParams } from 'react-router-dom';

const View = (props) => {
    const {fkey}=useParams();
    const food=data.find(pd => pd.key == fkey);
    const {name,img,price}=food;
    
    console.log(food);
    
    return (
        <div>
            <h1>{fkey}</h1>
            <h1> {name} </h1>
            <img src={img} alt=""/>
        </div>
    );
};

export default View;