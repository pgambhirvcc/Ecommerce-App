import React, { useContext } from 'react'
import ProductList from '../component/ProductList'
import Categories from '../component/Categories';
import { Box, TextField } from '@mui/material';

const HomePage = () => {

  return (
    <Box>

    <TextField id="outlined-basic" label="Outlined" variant="outlined" />

    <Box component='section' sx={{ display:'grid', gridTemplateColumns: '30% 70%', marginTop: 20 }}>
        <Categories />
        <ProductList />
    </Box>

    </Box>

  )
}

export default HomePage