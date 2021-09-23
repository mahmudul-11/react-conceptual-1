import './ShowJson.css'
import React from 'react';
import { addToLoacalStorage, rmoveToLocalStorage } from '../LocalStorage/LocalStorage';

const ShowJson = (props) => {
    // console.log(props.v);
    const { _id, name } = props.v
    return (

        <div className='cls'>

            <h1>{name}</h1>
            <h3>{_id}</h3>
            <button onClick={() => addToLoacalStorage(_id)}>Purches</button>
            <button onClick={() => rmoveToLocalStorage(_id)}>Remove</button>
            

            {/* Function with paramete  and for this an annonymus function is needed*/}

        </div>
    );
};

export default ShowJson;