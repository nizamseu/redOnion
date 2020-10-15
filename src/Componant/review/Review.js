import React, { useContext } from 'react';
import { MyContext } from '../../App';
import './review.css';
import { Link } from 'react-router-dom';
import { parse } from '@fortawesome/fontawesome-svg-core';

const Review = () => {
const [review,]=useContext(MyContext);
console.log("Check",review);

const totalAmount=review.reduce((initial,sum)=>{
    return sum=initial+sum.price;
},0)

let shipment=0;
if(totalAmount>100)
    {shipment =10}
else if(totalAmount>50) 
    {shipment=15}
else if(totalAmount>30) 
    {shipment=20}
else if(totalAmount>0)
    {shipment=25}
else {shipment =0}

console.log("shipment",shipment);
const tax=(totalAmount*.15).toFixed(2);

const grandTotal=parseInt(totalAmount+shipment+tax);

    return (
           <div className="review">
                
                <div className="reviewFirstSection">
               
                    {  review.map((item)=> 
                    <Link  to={"/view/" + item.key}>
                    <div>
                        <div className="reviewItem">
                                <div className="reviewImg">
                                    <h1><img src={item.img} alt=""/> </h1>
                                </div>
                                <div className="reviewInfo">
                                    <h1>{item.name}</h1>
                                    <h4>{item.catelog}</h4>
                                    <h1>${item.price}</h1>
                                </div>
                        </div>

                    </div> 
                    </Link>)}
                
                
                </div>
                        

                <div>
                    <div className="SummaryOfCart">
                        <h1>Cart Summary</h1>
                        <h4>Item:{review.length}</h4>
                        <h4>Total Amount: {totalAmount}</h4>
                        <h4>Tax + VAT :{tax}</h4>
                        <h4>Shipment :{shipment}</h4>
                        <h3>Grand Total : {grandTotal}</h3>
                    </div>
                </div>

                </div>
    );
};

export default Review;