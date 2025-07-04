import React, { useState } from 'react';

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
  const deletTitle = (id) => {
    setCart(cart.filter((item) => !item.id));
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <div>
      <h2>Корзина товаров</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <p>
                {item.title} (Кол-во: {item.count})
              </p>
              <button onClick={() => increment(item.id)}>+1</button>
              <button onClick={() => deletTitle(item.id)}>Удалить</button>
            </div>
          ))}
          <button onClick={clearCart}>Очистить корзину</button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
