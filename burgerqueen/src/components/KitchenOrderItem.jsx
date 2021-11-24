/* eslint-disable react/prop-types */
import React from 'react';

const KitchenOrderItem = (props) => {
  const { order } = props;
  return (
    <div>
      <div>{order.client}</div>
      <ul>
        <li>
          {order.order.items.map((item) => (
            <li> {item.name} </li>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default KitchenOrderItem;
