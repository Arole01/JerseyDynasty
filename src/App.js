import React from 'react';
import { Header } from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from './Pages/authContext';
import { CartProvider } from './Pages/cartContext';


const App = () => {
  return (
    <BrowserRouter>
    <AuthContext>
      <CartProvider>
        <Header />
        <Routes>
          {/* Define your routes here */}
        </Routes>
      </CartProvider>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App