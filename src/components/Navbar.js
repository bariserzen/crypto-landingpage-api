import React from 'react';
import {FaCoins} from 'react-icons/fa';
import './Navbar.css';



const Navbar = () => {


    return (

            <div className='navbar'>
                <FaCoins className='icon' />
                <h1> Cryptocurrencies </h1>
            </div>
    );
};

export default Navbar;