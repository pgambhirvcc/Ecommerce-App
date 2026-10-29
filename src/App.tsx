
import { useEffect, useState } from 'react'
import './App.css'
import ProductContext from './Context/ProductContext'
import type { Product, ProductInfo } from './types/types';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CartsPage from './Pages/CartsPage';
import FavoritesPage from './Pages/FavoritesPage';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const PRODUCT_API_URL = 'https://fakestoreapi.com/products';

function App() {
  const [productInfo, setProductInfo] = useState<ProductInfo>({
    productstList: [],
    categories: [],
    selectedCategories: [],
    searchedQuery: '',
    productsInCart: [],
    favorites: []
  });

  const getProductList = async () => {
    const productData = await fetch(PRODUCT_API_URL);
    const productDataJson: Product[] = await productData.json();
    const categories = productDataJson.map((product) => product.category);
    const categoriesSet = new Set(categories);
    const nonDuplicateCategories = [...categoriesSet];

    setProductInfo({
      ...productInfo,
      categories: nonDuplicateCategories,
      productstList: productDataJson
    })
  }

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <ProductContext.Provider value={{
      productInfo,
      setProductInfo
    }}>


      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }} disableGutters>
             <Link to={'/'}>
              <Typography sx={{ color: 'white', backgroundColor: 'green', padding: '10px' }}>Home</Typography>
            </Link>

            <Link to={'/carts'}>
              <Typography sx={{ color: 'white', backgroundColor: 'blue', padding: '10px' }}>Carts</Typography>
            </Link>
            <Link to={'/favorites'}>
              <Typography sx={{ color: 'white', backgroundColor: 'red', padding: '10px' }}>Favorites</Typography>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/carts' element={<CartsPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </ProductContext.Provider>

  )
}

export default App
