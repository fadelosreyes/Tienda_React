import React from 'react';
import { useCart } from '../context/CartContext';
import Button from './Button';

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  const handlePurchase = () => {
    alert('¡Gracias por tu compra!');
    clearCart(); // Vacía el carrito después de comprar
  };

  const groupedCart = cart.reduce((acc, product) => {
    if (acc[product.id]) {
      acc[product.id].quantity += 1;
    } else {
      acc[product.id] = { ...product, quantity: 1 };
    }
    return acc;
  }, {});

  const cartItems = Object.values(groupedCart);

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((product) => (
            <li key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} className="cart-image" />
              <div className="cart-details">
                <h4 className="cart-item-title">{product.title}</h4>
                <p className="cart-price">${product.price} x {product.quantity}</p>
                <p className="cart-total">Subtotal: ${product.price * product.quantity}</p>
                <Button text="Eliminar" onClick={() => removeFromCart(product.id)} />
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-summary">
        <h3>Total a Pagar:</h3>
        <p className="cart-total-price">${totalPrice.toFixed(2)}</p>
        {cartItems.length > 0 && (
          <Button text="Comprar" onClick={handlePurchase} />
        )}
      </div>
    </div>
  );
};

export default Cart;
