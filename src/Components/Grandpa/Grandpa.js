import React, { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'




const Grandpa = () => {
    // akhane grandpa er house(dynamic) gulo  jodi tar chelemeye der shegulo dite chai. taile props er maddome send korte pari.
    const [house, setHouse] = useState(1);
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }
    return (
        <div className='grandpa'>
            <h3>Grandpa</h3>
            <button onClick={handleBuyAHouse}>Buy A House</button>
            <p>House: {house}</p>
            <div className='grandpas-children'>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </div>

        </div>
    );
};

export default Grandpa;