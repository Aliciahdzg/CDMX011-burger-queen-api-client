/* eslint-disable react/prop-types */
import React from 'react';

const KitchenOrderItem = (props) => {
  const { order } = props;
  return (
    <div className="order-container">
      <h3>{order.client}</h3>
      <ul>
        {order.order.items.map((item) => (
          <>
            <li key={item.id}>{item.name}</li>
            <li>{item.qty}</li>
          </>
        ))}
      </ul>
      <div className="time-btn">
        <p>cronometro</p>
        <button type="button" className="order-ready">
          Listo
        </button>
      </div>
    </div>
  );
};

export default KitchenOrderItem;
