import React from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const CurrencyRow = ({
  currency,
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  onChangeAmount,
  amount,
}) => {
  return (
    <div>
      <FormControl sx={{ minWidth: 120 }}>
        <TextField
          sx={{ padding: 1 }}
          id="outlined-basic"
          label="Amount"
          variant="outlined"
          value={amount}
          onChange={onChangeAmount}
        />
      </FormControl>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select label="Currency" sx={{ marginTop: 1 }}>
          {currency.map((coin) => (
            <MenuItem value={coin.name}>{coin.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CurrencyRow;
