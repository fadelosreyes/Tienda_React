import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OtherPage from './pages/OtherPage';
import { CartProvider } from './context/CartContext';
import './styles.css'; 
const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/other" element={<OtherPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
