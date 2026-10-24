import React, { type FunctionComponent } from 'react'
import type { Product } from '../types/types';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';

type ProductProps = {
    product: Product;
}

const ProductCard: FunctionComponent<ProductProps> = (props) => {
 const product = props.product;

  return (
    <div>
      <Card sx={{ maxWidth: 345, marginTop: 4, boxShadow: 'unset', border: '1px solid black' }}>
      <CardMedia
        sx={{ height: 200, width: '100%', backgroundSize: 'contain' }}
        image={product.image}
        title="green iguana"
      />
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Typography sx={{ flexBasis: '70%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}} gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>

        <Typography sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}} gutterBottom variant="span" component="div">
          ${product.price}
        </Typography>
        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.description}
        </Typography> */}

        
      </CardContent>

    </Card>
    </div>
  )
}

export default ProductCard
