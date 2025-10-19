import React, { memo } from 'react';
const CartItem = memo(
  ({ item, onIncrement, onDelete }) => {
    return (
      <>
        <p>
          {item.title} (Кол-во: {item.count})
        </p>
        <button onClick={() => onIncrement(item.id)}>+1</button>
        <button onClick={() => onDelete(item.id)}>Удалить</button>
      </>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.item.count === nextProps.item.count;
  }
);
export default CartItem;
