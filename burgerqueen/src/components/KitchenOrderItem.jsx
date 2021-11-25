/* eslint-disable react/prop-types */
import React from 'react';

const KitchenOrderItem = (props) => {
  const { order } = props;
  return (
    <div className="order-container">
      <h3>{order.client}</h3>
      <div className="items-container">
        {order.order.items.map((item) => (
          <ul>
            <li key={item.id}>{item.name}</li>
            <li>{item.qty}</li>
          </ul>
        ))}
      </div>

      <div className="order-btns">
        <p>cronometro</p>
        <button type="button" className="order-ready-btn">
          Listo
        </button>
      </div>
    </div>
  );
};

export default KitchenOrderItem;
