import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h3>T-Shirt Mania</h3>
            <nav className='navbar'>
                <Link to='/'>Home</Link>
                <Link to='/order-review'>Order-review</Link>
            </nav>
        </div>
    );
};

export default Header;