import React from 'react';
import './Father.css'
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = ({ house, ornament }) => {
    return (
        <div className='father'>
            <h4>father</h4>
            <p>house: {house}</p>
            <div className='fathers-children'>
                <Myself house={house} ornament={ornament}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;