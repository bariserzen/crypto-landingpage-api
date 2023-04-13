import React,{useState, useEffect} from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Coins from './components/Coins';
import axios from 'axios';




const App = () => {


const [coins, setCoins] = useState([]);

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'

useEffect(() => {

    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data[14])
    }).catch((error) => {
      console.log(error)
    })
  }, []);



  return (
    <>
      <Navbar/>
      <Coins coins={coins} />
    </>
  );
};

export default App;








