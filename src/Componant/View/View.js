import React from 'react';
import './view.css';
import data from '../../Data/data'
import { useParams } from 'react-router-dom';


const View = (props) => {
    const {fkey}=useParams();
    const food=data.find(pd => pd.key == fkey);
    const {name,img,price,details}=food;
    
    console.log(food);
    
    return (
        <div className="viewMain">
            <div className="first-view-half">
            <h1> {name} </h1>
            <br/>
            <p> {details}</p>
            <h1>${price}</h1>
            <button className="btn">add</button>
            <div className="sortimg">
                <img src={img} alt=""/>
                <img src={img} alt=""/>
            </div>

           
            </div>

            <div className="second-view-half img-fluid">
            <img src={img} alt=""/>
            </div>
        </div>
    );
};

export default View;