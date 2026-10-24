import React, { useContext, useEffect, useState, type FunctionComponent } from 'react'
import ProductCard from './ProductCard'
import type { Product } from '../types/types';
import { Box } from '@mui/material';
import ProductContext from '../Context/ProductContext';

type ProductListProps = {
    productsList: Product[];
};

const ProductList: FunctionComponent<ProductListProps> = (props) => {

    const { productInfo } = useContext(ProductContext);
    const { categories, selectedCategories, productstList } = productInfo;


    const [filteredProducts, setFilteredProducts] = useState(productstList);

    // useEffect(() => {
    //     setFilteredProducts(productsList);
    // }, []);

    useEffect(() => {
        console.log(selectedCategories, 'selected')
        const filteredItems = selectedCategories.length > 0 ? productstList.filter((product) => selectedCategories.includes(product.category)) : productstList;
        setFilteredProducts(filteredItems);
        console.log('updated ?', filteredItems);
    }, [selectedCategories, productstList]);


    console.log(filteredProducts, 'data')

    return (
        <Box component="section" sx={{ display: 'grid', gridTemplateColumns: 'auto auto auto', gap: '8px' }}>
            {
                filteredProducts?.map((product) => <ProductCard product={product} />)
            }
        </Box>
    )
}

export default ProductList