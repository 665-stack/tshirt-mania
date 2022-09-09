import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';
import './Special.css'
const Special = () => {

    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h5>Special</h5>
            <p>house: {house}</p>
            <button onClick={() => setHouse(house + 1)}>Buy a house</button>
        </div>
    );
};

export default Special;