import React, { createContext, useContext, useState } from 'react';

// Crea el contexto CartContext que se usará para compartir el estado global del carrito.
const CartContext = createContext();

// El componente CartProvider envuelve a los componentes hijos y les proporciona acceso al estado global del carrito.
export const CartProvider = ({ children }) => {
  // Inicializa el estado cart como un array vacío. Este estado mantiene los productos en el carrito.
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito. Actualiza el estado con el nuevo producto.
  const addToCart = (product) => {
    setCart([...cart, product]);  // Crea un nuevo array con el producto añadido al carrito.
  };

  // Función para eliminar un producto del carrito utilizando su ID. Filtra el carrito y excluye el producto con ese ID.
  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));  // Elimina el producto cuyo ID coincide con productId.
  };

  // Función para vaciar el carrito. Resetea el estado cart a un array vacío.
  const clearCart = () => {
    setCart([]);  // Vacía el carrito, es decir, establece cart como un array vacío.
  };

  // Calcula el precio total de los productos en el carrito. Suma los precios de todos los productos.
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  // Retorna el CartContext.Provider que proporciona el estado del carrito y las funciones a los componentes hijos.
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}>
      {children}  {/* Los componentes hijos pueden acceder al contexto del carrito. */}
    </CartContext.Provider>
  );
};

// Hook personalizado useCart que permite a los componentes acceder al contexto CartContext.
export const useCart = () => useContext(CartContext); 
