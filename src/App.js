import React from 'react';
import { Header } from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { AuthContext } from './Pages/authContext';
import { CartProvider } from './Pages/cartContext';
import { SearchProvider } from './Pages/searchContext';
import SingleProduct from './Pages/SingleProduct';

const App = () => {
  return (
    <BrowserRouter>
    <AuthContext>
      <CartProvider>
        <SearchProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<SingleProduct/>}/>
        </Routes>
        </SearchProvider>
      </CartProvider>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App