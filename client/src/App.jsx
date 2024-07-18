import { useEffect, useState } from 'react'
import './App.css'
import Product from "./products/Product"
import ProductDetail from './products/ProductDetail'
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../Api/Api';

function App() {
  const [count, setCount] = useState(0)

  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/product`);
      // console.log("IN APP",response.data.result)
      setProducts(response.data.result);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={
          <Product productProps={products}/>
        }/>
        <Route path="/product/:id" element={
          <ProductDetail productProps={products} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
