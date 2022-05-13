import React from 'react';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CurrencyRow from './CurrencyRow';

const CryptoConverter = () => {
  const [currency, setCurrency] = useState([]);

  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

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
          
          console.log(obj);
          return obj;
        });
        setCurrency(coins);

        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([coins, ...Object.keys(data.rates)]);
        setFromCurrency(coins);
        setToCurrency(firstCurrency);
        setExchangeRate(coins.price[firstCurrency]);
      });
  }, []);

    console.log(
      'amountInFromCurrency',
      amountInFromCurrency,
      'amount',
      amount,
      'exchangeRate',
      exchangeRate,
      'toCurrency',
      toCurrency,
      'fromCurrency',
      fromCurrency,
      'currencyOptions',
      currencyOptions,
    );

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
          setExchangeRate(coins.price[toCurrency]);
        });

    }, [fromCurrency, toCurrency]);

    function handleFromAmountChange(e) {
      setAmount(e.target.value);
      setAmountInFromCurrency(true);
    }

    function handleToAmountChange(e) {
      setAmount(e.target.value);
      setAmountInFromCurrency(false);
    }

  return (
    <Box component="form">
      <CurrencyRow
        currency={currency}
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={toAmount}
      />
      <CurrencyRow
        currency={currency}
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </Box>
  );
};

export default CryptoConverter;
