/* eslint-disable react/prop-types */
import React from 'react';
import LunchItem from './LunchItem';

const Lunch = ({ lunchMenu, addItem, removeItem }) => (
  <div>
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

export default Lunch;
