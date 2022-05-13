import CryptoConverter from './components/CryptoConverter';
import CryptoTable from './components/CryptoTable';
import Grid from '@mui/material/Grid';

function App() {
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <CryptoTable />
      </Grid>
      <Grid item xs={4} sx={{ marginTop: 5 }}>
        <CryptoConverter />
      </Grid>
    </Grid>
  );
}

export default App;
