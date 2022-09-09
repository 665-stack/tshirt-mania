import React from 'react';
import './Aunty.css'
const Aunty = ({ house }) => {
    return (
        <div className='aunty'>
            <h4>Aunty</h4>
            <p>house: {house}</p>
        </div>
    );
};

export default Aunty;