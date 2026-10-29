import React, { useContext } from 'react'
import ProductList from '../component/ProductList'
import Categories from '../component/Categories';
import { Box, TextField } from '@mui/material';
import ProductContext from '../Context/ProductContext';

const HomePage = () => {

  const { productInfo, setProductInfo } = useContext(ProductContext);

  const handleSearchChange = (event) => {
    const searchedValue = event.target.value;
    
    setProductInfo((current) => (
      {
        ...current,
        searchedQuery: searchedValue
      }
    ))
  }

  return (
    <Box>

    <TextField value={productInfo.searchedQuery} onChange={handleSearchChange} fullWidth label="Search" placeholder='Search for a product' variant="outlined" />

    <Box component='section' sx={{ display:'grid', gridTemplateColumns: '30% 70%', marginTop: '20px'}}>
        <Categories />
        <ProductList />
    </Box>

    </Box>

  )
}

export default HomePage