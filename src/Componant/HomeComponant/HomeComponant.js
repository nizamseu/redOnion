import React from 'react';

const HomeComponant = (props) => {
    const all=props.usrData;
    // console.log(all);
    
    return (
        <div>
           <h1>{all.name}</h1>
        </div>
    );
};

export default HomeComponant;