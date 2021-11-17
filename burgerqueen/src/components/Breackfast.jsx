/* eslint-disable react/prop-types */
import React from 'react';
import BreackfastItem from './BreackfastItem';

const Breackfast = (props) => {
  const { breakfastMenu, addItem, removeItem } = props;

  return (
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
};

export default Breackfast;
