import React, { useContext, useEffect, useMemo, useState, type FunctionComponent } from 'react'
import ProductCard from './ProductCard'
import type { Product } from '../types/types';
import { Box, Typography } from '@mui/material';
import ProductContext from '../Context/ProductContext';


const ProductList = () => {

    const { productInfo } = useContext(ProductContext);
    const allProducts = productInfo.productstList;

    const selectedCategories = productInfo.selectedCategories;

    // This depends on 2 things
    // Selected Categories
    // Searched Query
    const filteredProducts = useMemo(() => {
         const searchedQuery = productInfo.searchedQuery.trim().toLowerCase();
         const filteredValues = allProducts.filter((product) => {
            const categoryMatches = selectedCategories.length === 0 || selectedCategories.includes(product.category);

            const searchedMatches = searchedQuery === '' || product.title.toLowerCase().includes(searchedQuery);

            return categoryMatches && searchedMatches;
         })

         return filteredValues;

    }, [allProducts, selectedCategories, productInfo.searchedQuery]);


    if (filteredProducts?.length === 0) {
        return <Typography>Either Searched/category selection Product not found </Typography>
    }

    return (
        <Box component="section" sx={{ display: 'grid', gridTemplateColumns: 'auto auto auto', gap: '8px' }}>
            {
                filteredProducts?.map((product) => <ProductCard key={product.id} product={product} />)
            }
        </Box>
    )
}

export default ProductList