import React from 'react';

const CompB = ({obj}) => {
    const clickevent=()=>{
        console.log("Component B")
    }
    return (
        <div>
            <h1 style={{color:'blueviolet'}}>Component B</h1>
            <button onClick={clickevent}>click</button>
            <h2>Batch:{obj.batch}</h2>
            <h2>Team:{obj.team}</h2>
        </div>

    );
};

export default CompB;