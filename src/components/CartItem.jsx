import React from 'react';
const CartItem = React.memo(({ item, onIncrement, onDelete }) => {
  console.log(`CartItem ${item.id} перерисовывается:`, item.title, item.count);

  return (
    <>
      <p>
        {item.title} (Кол-во: {item.count})
      </p>
      <button onClick={() => onIncrement(item.id)}>+1</button>
      <button onClick={() => onDelete(item.id)}>Удалить</button>
    </>
  );
});
export default CartItem;
