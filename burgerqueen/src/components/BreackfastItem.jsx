/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';

const BreackfastItem = (props) => {
  const { item, addItem, removeItem } = props;

  return (
    <div>
      <ul>
        <li>{item.name}</li>
        <li>$ {item.price}</li>
        <button type="button" onClick={() => addItem(item)}>
          +
        </button>
        <button type="button" onClick={() => removeItem(item)}>
          -
        </button>
      </ul>
    </div>
  );
};

export default BreackfastItem;
