import React, { useContext } from 'react'
import ProductList from '../component/ProductList'
import ProductContext from '../Context/ProductContext';
import Categories from '../component/Categories';
import { Box, TextField } from '@mui/material';

const HomePage = () => {

  const { productInfo: { productstList} } = useContext(ProductContext);


  return (
    <Box>

    <TextField id="outlined-basic" label="Outlined" variant="outlined" />

    <Box component='section' sx={{ display:'grid', gridTemplateColumns: '30% 70%', marginTop: 20 }}>
        <Categories />
        <ProductList productsList={productstList} />
    </Box>

    </Box>

  )
}

export default HomePage