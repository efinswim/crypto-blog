import React from 'react';
import Box from '@mui/material/Box';
import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import CurrencyRow from './CurrencyRow';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const CryptoConverter = () => {
  const [currency, setCurrency] = useState([]);
  const [firstAmount, setFirstAmount] = useState(1);
  const [secondAmount, setSecondAmount] = useState(10);
  const [firstCurrency, setFirstCurrency] = useState('BTC');
  const [secondCurrency, setSecondCurrency] = useState('ETH');

  const [state, dispatch] = useReducer(reducer, firstAmount);

  useEffect(() => {
    axios
      .get(
        'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD',
      )
      .then(({ data }) => {
        const coins = data.Data.map((coin) => {
          const obj = {
            name: coin.CoinInfo.Name,
            price: coin.RAW.USD.PRICE,
          };
          return obj;
        });
        setCurrency(coins);
      });
  }, []);

  function handleFirstAmountChange(event) {
    setFirstAmount(event.target.value);
  }

  function handleSecondAmountChange(event) {
    setSecondAmount(event.target.value);
  }

  return (
    <Box component="form">
      <CurrencyRow
        currency={currency}
        firstAmount={firstAmount}
        secondAmount={secondAmount}
        handleFirstAmountChange={handleFirstAmountChange}
        handleSecondAmountChange={handleSecondAmountChange}
        firstCurrency={firstCurrency}
        secondCurrency={secondCurrency}
      />
    </Box>
  );
};

export default CryptoConverter;
