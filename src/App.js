import React from 'react';
import { Header } from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { AuthContext } from './Pages/authContext';
import { CartProvider } from './Pages/cartContext';
import { SearchProvider } from './Pages/searchContext';
import { Login } from './Pages/Login'
import SingleProduct from './Pages/SingleProduct';
import Signup from './Pages/Signup';

const App = () => {
  return (
    <BrowserRouter>
    <AuthContext>
      <CartProvider>
        <SearchProvider>
        <Routes>
          <Route path="/" element={<>
          <Header />
          <Home />
          </>} />
          <Route path="/:id" element={<SingleProduct/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        </SearchProvider>
      </CartProvider>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App