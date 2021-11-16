/* eslint-disable react/prop-types */
import React from 'react';
import LunchItem from './LunchItem';

const Lunch = (props) => {
  const { lunchMenu, addItem, removeItem } = props;

  return (
    <div>
      <h3>Comida</h3>
      {lunchMenu.map((item) => (
        <LunchItem
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
