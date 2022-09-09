import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';
import './Aunty.css'
const Aunty = () => {
    const [house, setHouse] = useContext(RingContext)
    const handleHouseIncrease = () => {
        setHouse(house + 1)
    }
    return (
        <div className='aunty'>
            <h4>Aunty</h4>
            <p>house: {house}</p>
            <button onClick={handleHouseIncrease}>Buy a house</button>
        </div>
    );
};

export default Aunty;
