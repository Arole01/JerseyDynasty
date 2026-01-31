import React from 'react';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Faqs } from './Pages/Faqs'
import { SizeGuide } from './Pages/SizeGuide';
import { AuthContext } from './Pages/authContext';
import { CartProvider } from './Pages/cartContext';
import { Cart } from './Pages/Cart'
import { SearchProvider } from './Pages/searchContext';
import { Login } from './Pages/Login'
import SingleProduct from './Pages/SingleProduct';
import Signup from './Pages/Signup';
import { Payment } from './Pages/Payment'
import { RefundPolicy } from './Pages/RefundPolicy';
import { PrivacyPolicy } from './Pages/PrivacyPolicy';
import { Contact } from './Pages/Contact';
import { Layout } from './Components/Layout';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <BrowserRouter>
    <AuthContext>
      <CartProvider>
        <ToastContainer position='top-right' autoClose={1000}></ToastContainer>
        <SearchProvider>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/faqs" element={<Layout><Faqs /></Layout>} />
          <Route path="/size-guide" element={<Layout><SizeGuide /></Layout>} />
          <Route path="/refund-policy" element={<Layout><RefundPolicy /></Layout>} />
          <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
          <Route path="/contact" element={<Layout><Contact/></Layout>}/>
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