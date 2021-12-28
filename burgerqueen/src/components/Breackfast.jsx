/* eslint-disable react/prop-types */
import React from 'react';
import BreackfastItem from './BreackfastItem';

const Breackfast = ({ breakfastMenu, addItem, removeItem }) => (
  <div>
    {breakfastMenu.map((item) => (
      <BreackfastItem
        key={item.id}
        item={item}
        addItem={addItem}
        removeItem={removeItem}
      />
    ))}
  </div>
);

export default Breackfast;
