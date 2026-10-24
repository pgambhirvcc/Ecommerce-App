
import { useEffect, useState } from 'react'
import './App.css'
import ProductContext from './Context/ProductContext'
import type { Product, ProductInfo } from './types/types';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';

const PRODUCT_API_URL = 'https://fakestoreapi.com/products';

function App() {
  const [productInfo, setProductInfo] = useState<ProductInfo>({
    productstList: [],
    categories: [],
    selectedCategories: []
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

  console.log(productInfo);

  return (
    <ProductContext.Provider value={{
      productInfo,
      setProductInfo
    }}>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </ProductContext.Provider>
    
  )
}

export default App
