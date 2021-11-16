/* eslint-disable react/prop-types */
import React from 'react';
import BreakfastItem from './BreakfastItem';

const Breakfast = (props) => {
  const { breakfastMenu, addItem, removeItem } = props;

  return (
    <div>
      <h3>Desayunos</h3>
      {breakfastMenu.map((item) => (
        <BreakfastItem
          key={item.id}
          item={item}
          addItem={addItem}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
};

export default Breakfast;
