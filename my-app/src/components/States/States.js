import './States.css'
import React, { useEffect, useState } from 'react';
// Ekhne React ta hocche node module jeta bracket er bahire ache

const States = () => {
    const [values, setValues] = useState(0);
    const increaseValue = ()=>{
        setValues(values+1);
        // console.log(values); **** ekhane eta dile website er theke 1 kom print hobe kron "setValues" asynchronus function.
    }
    // useEffect(()=>{

    // },[])//ekhne jodi [] jodi na dewa hoy tahole proti state chnage howar  por por ei refresh hobe. [] er vitore jar jar opor dependent segolar naam likhte hobe...1 tar beshi o likha jabe (,) dia separate korte hobe
    useEffect(()=>{ },[ ]);
    return (
        <div>
        <h1>{values}</h1>        
        <button onClick={increaseValue}>Increase</button>
        </div>
    );
};

export default States;
// export{add, multipy}
