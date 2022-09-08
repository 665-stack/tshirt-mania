import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRomoveFromCart }) => {
    return (
        <div className='cart'>
            <h2>Item Selected: {cart.length}</h2>
            {
                cart.map(tShirt => <p>{tShirt.name}
                    <button onClick={() => { handleRomoveFromCart(tShirt) }}>X</button></p>)
            }
        </div>
    );
};

export default Cart;