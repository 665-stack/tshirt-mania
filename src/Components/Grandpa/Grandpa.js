import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'




const Grandpa = () => {
    // akhane grandpa er 7 ta house ace. akhone jodi tar chelemeye der shegulo dite chai. taile props
    const house = 7;
    return (
        <div className='grandpa'>
            <h3>Grandpa</h3>
            <div className='grandpas-children'>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </div>

        </div>
    );
};

export default Grandpa;