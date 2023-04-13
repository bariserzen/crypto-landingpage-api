import React from 'react'
import CoinItem from './CoinItem';
import './Coins.css';




const Coins = (props) => {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p className='start'>#</p>
                <p className='coin-name'>Coin</p>
                <p className='price'>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Mkt cap</p>
            </div>

            {props.coins.map(coins => {
                
                return (
                    <CoinItem coins={coins} />
                )
            })};



        </div>
    </div>
  );
};

export default Coins;
