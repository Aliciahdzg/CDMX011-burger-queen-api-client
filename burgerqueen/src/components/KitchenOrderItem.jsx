/* eslint-disable react/prop-types */
import React from 'react';

const KitchenOrderItem = (props) => {
  const { order, updateData, removeOrder, difference, time } = props;
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
        <div>
          <p>Entrada: {order.order.timeIn}</p>
          <p>Salida: {order.order.timeOut}</p>
        </div>
        <button
          type="button"
          className="order-ready-btn"
          onClick={() => {
            updateData(order);
            removeOrder(order);
            difference(order.order.timeIn, time);
          }}
        >
          Listo
        </button>
      </div>
    </div>
  );
};

export default KitchenOrderItem;
