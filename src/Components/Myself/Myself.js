import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house, ornament }) => {
    return (
        <div>
            <h5>Me</h5>
            <p><small>house: {house}</small></p>
            <Special house={house}></Special>
        </div>
    );
};

export default Myself;