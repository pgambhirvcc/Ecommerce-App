import React, { useContext } from 'react'
import ProductList from '../component/ProductList';
import ProductContext from '../Context/ProductContext';
import { Typography } from '@mui/material';

const CartsPage = () => {

    const { productInfo } = useContext(ProductContext);
    const productsInCart = productInfo.productsInCart;

    const totalPrice = productsInCart.reduce((acc, cV) => acc + cV.price, 0);

    console.log(productsInCart)
  return (
    <div>
        <ProductList />

        <Typography>
            Total Price: {totalPrice} 
        </Typography>
    </div>
  )
}

export default CartsPage