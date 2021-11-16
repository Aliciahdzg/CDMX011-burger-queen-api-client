/* eslint-disable react/prop-types */
import React from 'react';
import LunchtItem from './BreakfastItem';

const Lunch = (props) => {
  const { lunchMenu, addItem, removeItem } = props;

  return (
    <div>
      <h3>Comidas</h3>
      {lunchMenu.map((item) => (
        <LunchtItem
          key={item.id}
          item={item}
          addItem={addItem}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
};

export default Lunch;
