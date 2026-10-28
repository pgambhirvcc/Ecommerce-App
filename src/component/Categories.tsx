import React, { useContext } from 'react'
import ProductContext from '../Context/ProductContext'
import Checkbox from '@mui/material/Checkbox';
import { Box, FormControlLabel, FormGroup, Typography } from '@mui/material';

const Categories = () => {

    const { productInfo, setProductInfo } = useContext(ProductContext);
    const { selectedCategories, categories } = productInfo;

    const handleCategoryChange = (category: string, checked: boolean) => {
        setProductInfo((current) => ({
            ...current,
            selectedCategories: checked ? [...current.selectedCategories, category]
            : current.selectedCategories.filter((item) => item !== category)
        }))
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Typography variant='h4'>Categories</Typography>
            <FormGroup>
                {
                    categories?.map((category: string) => {
                        return (
                            <FormControlLabel key={category} label={category} control={
                                <Checkbox checked={selectedCategories.includes(category)} onChange={
                                    (event) => {
                                        handleCategoryChange(category, event.target.checked)
                                    }
                                } />
                            } />
                        )
                    })
                }
            </FormGroup>
        </Box>
    )
}

export default Categories