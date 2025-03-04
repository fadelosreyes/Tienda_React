import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { useCart } from '../context/CartContext';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // Obtener productos de la API y filtrar solo electrónicos
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        const electronics = data.filter(product => product.category === 'electronics');
        setProducts(electronics);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <main>
      <section className="product-list">
        <h3>Productos Electrónicos Disponibles</h3>
        <div className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h4 className="product-title">{product.title}</h4>
              <p className="product-price">${product.price}</p>
              <Button text="Agregar al carrito" onClick={() => addToCart(product)} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
