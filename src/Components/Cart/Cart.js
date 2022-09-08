import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRomoveFromCart }) => {
    // Conditional rendaring options
    // 1. Element variable
    // 2. ternary operator; condition ? true s: false
    // 3. && operator (shorthand)
    // 4. is kind same like && operator
    let command;
    if (cart.length === 0) {
        command = <p className='element-var-p'>Please Add at least one items</p>
    }
    else if (cart.length === 1) {
        command = <p className='element-var-p'>Please add more</p>
    }
    else {
        command = <p className='element-var-p'><small>Thanks for adding item</small></p>
    }
    return (
        <div className='cart'>
            <h2>Item Selected: {cart.length}</h2>
            {/* 1. element variable */}
            {command}
            {
                cart.map(tShirt => <p>{tShirt.name}
                    <button onClick={() => { handleRomoveFromCart(tShirt) }}>X</button></p>)
            }
            {/*  4. */}
            {
                cart.length === 0 || <p className='voucher-check'>Check Voucher</p>
            }
            {/* && operator (shorthand)*/}
            {
                cart.length === 3 && <div className='freeDelivary'>
                    <h3>Free Delivary for 3 item</h3>
                    <p>Is Avaiable</p>
                </div>
            }


            {/* 2. ternary operator example by conditional rendaring */}
            {cart.length !== 4 ? <p></p> : <button className='ternary-remove-all'>Remove ALL</button>
            }
            {/* 3. && operator */}
            {
                cart.length !== 0 && <button className='review-order'>Review Order</button>
            }
        </div>
    );
};

export default Cart;