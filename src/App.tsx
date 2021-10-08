import React from 'react';
import './App.scss';
import { Grid, Typography } from '@mui/material';
import ShopItems from './components/shop-items/shop-items';
import Basket from './components/basket';

function App() {
  return (
    <Grid container spacing={2} padding-x={10}>
      <Grid className="something" item xs={12}>
        <Typography align="center" variant="h2">React Till Demo</Typography>  
      </Grid>
      <Grid item xs={6}>
        <ShopItems />
      </Grid>
      <Grid item xs={6}>
        <Basket />
      </Grid>
    </Grid>
  );
}

export default App;
