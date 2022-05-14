import React from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';

const CurrencyRow = ({
  currency,
  firstAmount,
  secondAmount,
  handleFirstAmountChange,
  handleSecondAmountChange,
  firstCurrency,
  secondCurrency
}) => {
  return (
    <Box>
      <div>
        <FormControl sx={{ minWidth: 120 }}>
          <TextField
            sx={{ padding: 1 }}
            id="outlined-basic"
            label="Сумма"
            variant="outlined"
            value={firstAmount}
            onChange={handleFirstAmountChange}
          />
        </FormControl>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
          <Select
            label="Currency"
            sx={{ marginTop: 1 }}
            defaultValue={firstCurrency}>
            {currency.map((coin) => (
              <MenuItem key={coin.name} value={coin.name}>
                {coin.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ minWidth: 120 }}>
          <TextField
            sx={{ padding: 1 }}
            id="outlined-basic"
            label="Сумма"
            variant="outlined"
            value={secondAmount}
            onChange={handleSecondAmountChange}
          />
        </FormControl>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
          <Select
            label="Currency"
            sx={{ marginTop: 1 }}
            defaultValue={secondCurrency}>
            {currency.map((coin) => (
              <MenuItem key={coin.name} value={coin.name}>
                {coin.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Box>
  );
};

export default CurrencyRow;
