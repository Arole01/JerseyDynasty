import React from 'react';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Faqs } from './Pages/Faqs'
import { AuthContext } from './Pages/authContext';
import { CartProvider } from './Pages/cartContext';
import { Cart } from './Pages/Cart'
import { SearchProvider } from './Pages/searchContext';
import { Login } from './Pages/Login'
import SingleProduct from './Pages/SingleProduct';
import Signup from './Pages/Signup';
import { Payment } from './Pages/Payment'

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
          <Footer />
          </>} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/:id" element={<SingleProduct/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/payment-success" element={<Payment/>}/>
        
        </Routes>
        </SearchProvider>
      </CartProvider>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App