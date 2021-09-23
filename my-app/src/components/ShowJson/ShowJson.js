import './ShowJson.css'
import React from 'react';

const ShowJson = (props) => {
    // console.log(props.v);
    const {_id,name } = props.v
    return (
        <div className='cls'>
            <h1>{name}</h1>
            <h3>{_id}</h3>
        </div>
    );
};

export default ShowJson;