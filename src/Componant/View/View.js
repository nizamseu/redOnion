import React, { useContext } from 'react';
import './view.css';
import data from '../../Data/data'
import { useParams} from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { MyContext } from '../../App';




const View = () => {
    const [contextData,setContextData]= useContext(MyContext)
    const [count,setCount]=useState(1)
    const {fkey}=useParams();
    const food = data.find(pd => pd.key == fkey);
    const {name,img,price,details,key}=food;


    // const handlepluse= ()=>{
    //    setCount(count+1)
    // }
    // const handleMinus= ()=>{
    //     count>1 ?setCount(count-1)
    //     :setCount(1)
    // }
    
    const handlEvent= (item) => {
        const newItem=[...contextData,item]
    setContextData(newItem)
     
     }
   
     food.quantity=count;
     
    return (
        <div>
       <Navbar></Navbar>
            <div className="viewMain">
             <div className="first-view-half">
                 <h1> {name} </h1>
                 <br/>
                <p> {details}</p>
             <div className="countermain">
                 <h1> ${price} 
                </h1>
            <div className="counter">
                <button onClick={()=> setCount(count-1)} > - </button>
                <p>   {count}  </p>
                <button onClick={ ()=> setCount(count+1)} >  + </button>  
            </div> 
        </div>
                    
                        
        <div>
                        
         <button onClick={()=>handlEvent(food)} className="btn">add</button>
                        
        </div>
                    
        <div className="sortimg">
            <button>
             <img src={img} alt=""/>
            </button>

            <button>
            <img src={img} alt=""/>
            </button>
                            
                        
        </div>

                    
            </div>

                <div className="second-view-half img-fluid">
                    <img src={img} alt=""/>
                </div>
                    
            </div>

        </div>
    );
};

export default View;