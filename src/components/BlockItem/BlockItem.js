import React from 'react';
import './BlockItem.css'

function BlockItem({info}) {
    return (
        <div className="block">
            <img className="block__icon" src={info.icon}></img>
            <h3 className="block__title">{info.title}</h3>
            <p className="block__text">{info.text}</p>
        </div>
    );
}

export default BlockItem;