/* eslint-disable react/prop-types */
import React from 'react';

const KitchenOrderItem = (props) => {
  const { order } = props;
  return (
    <div>
      <div>{order.client}</div>
      <ul>
        {order.order.items.map((item) => (
          <li key={item.id}> {item.name} </li>
        ))}
      </ul>
    </div>
  );
};

export default KitchenOrderItem;
