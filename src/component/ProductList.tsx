import React, { useContext, useEffect, useMemo, useState, type FunctionComponent } from 'react'
import ProductCard from './ProductCard'
import type { Product } from '../types/types';
import { Box } from '@mui/material';
import ProductContext from '../Context/ProductContext';


const ProductList = () => {

    const { productInfo } = useContext(ProductContext);
    const allProducts = productInfo.productstList;

    console.log(allProducts, 'alProucts');
    const selectedCategories = productInfo.selectedCategories;

    const filteredProducts = useMemo(() => {
        if (selectedCategories.length === 0) {
            return allProducts;
        }

        const selected = new Set(selectedCategories);
        const filteredValues = allProducts.filter((product) => {
            return selected.has(product.category);
        })

        return filteredValues;
    }, [allProducts, selectedCategories]);

    console.log(filteredProducts, 'filteredProducts');


    return (
        <Box component="section" sx={{ display: 'grid', gridTemplateColumns: 'auto auto auto', gap: '8px' }}>
            {
                filteredProducts?.map((product) => <ProductCard key={product.id} product={product} />)
            }
        </Box>
    )
}

export default ProductList