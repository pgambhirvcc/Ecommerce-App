import React, { useContext } from 'react'
import ProductContext from '../Context/ProductContext'
import Checkbox from '@mui/material/Checkbox';
import { Box, FormControlLabel, FormGroup, Typography } from '@mui/material';

const Categories = () => {

    const { productInfo , setProductInfo } = useContext(ProductContext);
    const { selectedCategories, categories } = productInfo;

    const handleCategories = (category: string) => {

        // If selected categories already present then remove it otherwise add it.
        // const addedCategories = selectedCategories.includes(category) ? selectedCategories.splice() : [...selectedCategories, category];
        let addedCategories = [];

        if (selectedCategories.includes(category)) {
            const index = selectedCategories.findIndex((cat ) => cat === category );
            selectedCategories.splice(index, 1);
            addedCategories = selectedCategories;
        } else {
            addedCategories = [...selectedCategories, category];
        }
        
        setProductInfo({
            ...productInfo,
            selectedCategories: addedCategories
        })
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Typography variant='h4'>Categories</Typography>
            <FormGroup>
                {
                    categories?.map((category: string) => {
                        return (
                            <FormControlLabel onChange={() => handleCategories(category)} control={<Checkbox />} label={category} />
                        )
                    })
                }
            </FormGroup>
        </Box>
    )
}

export default Categories