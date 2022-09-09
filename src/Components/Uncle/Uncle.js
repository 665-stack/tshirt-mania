import React from 'react';
import './Uncle.css'

const Uncle = ({ house }) => {
    return (
        <div className='uncle'>
            <h4>uncle</h4>
            <p>house: {house}</p>
        </div>
    );
};

export default Uncle;