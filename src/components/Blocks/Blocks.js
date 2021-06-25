import React from 'react';
import BlockItem from '../BlockItem/BlockItem';
import './Blocks.css'
function Blocks({list}) {
    return (
        <div className="blocks">
            {list.map(item => <BlockItem key={item.id} info={item}/>)}
        </div>
    );
}

export default Blocks;