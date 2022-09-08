import React, { useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart'
import useTShirts from '../../Hooks/useTshirts';
import Tshirt from '../Tshirt/Tshirt';


const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tShirt => tShirt.id === selectedItem.id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert('Sorry Sir! Item already added')
        }

    }
    const handleRomoveFromCart = (selectedItem) => {
        const restItem = cart.filter(tShirt => tShirt.id !== selectedItem.id);
        setCart(restItem)
    }
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {
                    tShirts?.map(tShirt => <Tshirt
                        tShirt={tShirt}
                        key={tShirt.id}
                        handleAddToCart={handleAddToCart}></Tshirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleRomoveFromCart={handleRomoveFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;