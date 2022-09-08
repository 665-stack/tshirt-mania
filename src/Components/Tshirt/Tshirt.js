import React from 'react';
import './Tshirt.css'
const Tshirt = ({ tShirt, handleAddToCart }) => {
    const { name, img, price } = tShirt;

    return (
        <div className='t-shirt'>

            <img src={img} alt="" />
            <div className='tShirt-info'>
                <h4>{name}</h4>
                <p>Price: {price}</p>

                <button onClick={() => { handleAddToCart(tShirt) }}><small>Add to Cart</small></button>
            </div>
        </div>
    );
};

export default Tshirt;