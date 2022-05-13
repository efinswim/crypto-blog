import * as React from 'react';
import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({

}));

const CryptoLogo = styled(StyledTableCell)(({ theme }) => ({
  width: 20,
  height: 20,
  borderRadius: 30,
}));

const CryptoTable = () => {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD').then(
      ({ data }) => {
        const coins = data.Data.map((coin) => {
            const obj = {
            name: coin.CoinInfo.Name,
            fullName: coin.CoinInfo.FullName,
            imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
            price: coin.RAW.USD.PRICE,
            volume24Hour: coin.RAW.USD.VOLUME24HOUR
          }
          return obj
        })
        setCoins(coins)
      }
    )
  }, [])

  return (
    <TableContainer sx={{ marginTop: 6 }} component={Paper}>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell>FLAG</StyledTableCell>
            <StyledTableCell align="left">NAME</StyledTableCell>
            <StyledTableCell align="left">FULL NAME</StyledTableCell>
            <StyledTableCell align="left">PRICE</StyledTableCell>
            <StyledTableCell align="left">VOLUME 24H</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.map((coin) => (
            <StyledTableRow key={coin.name}>
              <CryptoLogo align="left">
                <img src={coin.imageUrl} alt="Crypto coin" />
              </CryptoLogo>
              <StyledTableCell align="left">{coin.name}</StyledTableCell>
              <StyledTableCell align="left">{coin.fullName}</StyledTableCell>
              <StyledTableCell align="left">{coin.price}</StyledTableCell>
              <StyledTableCell align="left">
                {coin.volume24Hour}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CryptoTable;