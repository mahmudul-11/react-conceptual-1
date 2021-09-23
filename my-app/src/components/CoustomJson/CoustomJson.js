import './CoustomJson.css'
import React, { useEffect, useState } from 'react';
import ShowJson from '../ShowJson/ShowJson';

const CoustomJson = () => {
    const [value, setValue] = useState([]);
    useEffect(()=>{
        fetch('./coustom.json')
        .then(res => res.json())
        .then(data => setValue(data))
    },[]);
    // console.log(value);
    return (
        <div>
            

            {
                value.map( v=> <ShowJson key={v._id} v={v}></ShowJson>)
            }
        </div>
    );
};

export default CoustomJson;