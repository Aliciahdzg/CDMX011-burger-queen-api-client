/* eslint-disable react/prop-types */
import React from 'react';

const KitchenOrderItem = ({ order, updateData, removeOrder, difference }) => {
  const { client } = order;

  const timeIn = new Date(order.order.timeIn);

  return (
    <div className="order-container">
      <h3>{client}</h3>
      <div className="kitchen-items-container">
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
