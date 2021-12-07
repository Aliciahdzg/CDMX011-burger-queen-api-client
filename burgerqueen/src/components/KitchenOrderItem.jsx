/* eslint-disable react/prop-types */
import React from 'react';

const KitchenOrderItem = (props) => {
  const { order, updateData, removeOrder, difference } = props;
  const timeIn = new Date(order.order.timeIn);
  return (
    <div className="order-container">
      <h3>{order.client}</h3>
      <div className="items-container">
        {order.order.items.map((item) => (
          <ul key={item.id}>
            <li>{item.name}</li>
            <li>{item.qty}</li>
          </ul>
        ))}
      </div>
      <div className="order-btns">
        <div>
          <p>Entrada: {timeIn.toLocaleTimeString()}</p>
        </div>
        <button
          type="button"
          className="order-ready-btn"
          onClick={() => {
            updateData(order);
            removeOrder(order);
            difference(order.order.timeIn);
          }}
        >
          Listo
        </button>
      </div>
    </div>
  );
};

export default KitchenOrderItem;
