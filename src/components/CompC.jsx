import React from 'react';
// import './style/CompC.css'
import CompA from './CompA';

const CompC = ({arrobj}) => {
    return (
        <div className='Compc'>
            <h1>Component C</h1>
            <p>This is my team</p>
            {/* <CompA /> */}
            {arrobj.map((item,index)=>{
                return(
                    <>
                    <div key={index}>
                      <h3>{item.id}</h3>
                      <h3>{item.name}</h3>
                      <h3>{item.designation}</h3>
                    </div>

                    </>
                )
            })}
        </div>
    );
};

export default CompC;