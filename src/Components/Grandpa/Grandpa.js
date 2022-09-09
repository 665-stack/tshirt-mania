import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
/* 
How to use context api step by step?
1. call createContext with default value
2. set a variable of the context with uppercase
3. Make sure you export the context to use it in other places
4. Wrap your child content using Context Provider. example: RingContext.Provider
5. Provide a value
6. to consume the context from child component
7. useContext hook and you will you need to pass the contextName
 */

// context api
export const RingContext = createContext('')


const Grandpa = () => {
    // akhane grandpa er house(dynamic) gulo  jodi tar chelemeye der shegulo dite chai. taile props er maddome send korte pari.
    const [house, setHouse] = useState(1);
    // akhane grandpa er kace akta diamond ring ace. akhon she jodi amr special jon ke direct dite cai taile normal system unujanyi parbe na. because props drilling kore jete hove. mane father > myself > special ababe dite hobe. But grandpa cacce direct special ke dite.
    const ornament = 'Diamond Ring';
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
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
        </RingContext.Provider>
    );
};

export default Grandpa;