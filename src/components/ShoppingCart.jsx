import React, { useState } from 'react';
import CartItem from './CartItem';

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    { id: 1, title: 'Футболка', count: 1 },
    { id: 2, title: 'Кепка', count: 2 },
  ]);

  const increment = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const deleteTitle = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  console.log('ShoppingCart перерисовывается!');

  return (
    <>
      <h2>Корзина товаров</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrement={increment}
              onDelete={deleteTitle}
            />
          ))}
          <button onClick={clearCart}>Очистить корзину</button>
        </>
      )}
    </>
  );
};
export default ShoppingCart;
