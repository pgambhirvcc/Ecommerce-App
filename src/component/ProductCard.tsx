import React, { useContext, useMemo, type FunctionComponent } from 'react'
import type { Product, ProductInfo } from '../types/types';
import { Card, CardMedia, CardContent, CardActions, Button, Typography, IconButton, Box } from '@mui/material';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ProductContext from '../Context/ProductContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useLocation } from 'react-router-dom';

type ProductProps = {
  product: Product;
}

const ProductCard: FunctionComponent<ProductProps> = (props) => {
  const product = props.product;
  const { productInfo , setProductInfo } = useContext(ProductContext);
  const { productsInCart} = productInfo;

  const location = useLocation();

  const isProductPartOfCart = useMemo(() => {
    // const data = productsInCart?.find((pd) => pd.id === product.id);

    let isFound = false;
    for (let i = 0 ; i < productsInCart.length; i++ ) {
      if (productsInCart[i].id === product.id) {
        isFound = true;
      }
    }

    console.log(isFound);

    return isFound;
  }, [productsInCart]);

  const productCartSelectedClassName = isProductPartOfCart ? 'selected': 'transparent';

  const addToCart = (product: Product) => {
    setProductInfo((current: ProductInfo) => ({
      ...current,
      productsInCart: [...current.productsInCart, product]
    }))
  }

  const addToFavorites = (product: Product) => {

    // TODO: TRY TO ADD/REMOVE using the below example.
    setProductInfo((current: ProductInfo) => ({
      ...current,
      favorites: [...current.favorites, product]
    }))

    //  setProductInfo((current) => ({
    //           ...current,
    //           selectedCategories: checked ? [...current.selectedCategories, category]
    //           : current.selectedCategories.filter((item) => item !== category)
    //       }))
  }

  return (
    <div>
      <Card sx={{ maxWidth: 345, marginTop: 4, boxShadow: 'unset', border: '1px solid black' }}>
        <CardMedia
          sx={{ height: 200, width: '100%', backgroundSize: 'contain' }}
          image={product.image}
          title="green iguana"
        />
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ flexBasis: '70%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} gutterBottom variant="h6" component="div">
              {product.title}
            </Typography>

            <Typography sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} gutterBottom variant="span" component="div">
              ${product.price}
            </Typography>
          </Box>


          {

            location.pathname === '/' && (

              <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton className={productCartSelectedClassName} color='primary' onClick={() => addToCart(product)}>
                  <AddShoppingCartIcon />
                </IconButton>

                <IconButton color='error' onClick={() => addToFavorites(product)} >
                  <FavoriteIcon />
                </IconButton>
              </CardActions>


            )

          }
        </CardContent>

      </Card>
    </div>
  )
}

export default ProductCard
