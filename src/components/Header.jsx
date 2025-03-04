import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Neobite</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/other">Carrito</Link>
      </nav>
    </header>
  );
};

export default Header;
