/* eslint-disable react/prop-types */
import React from 'react';

const KitchenOrderItem = (props) => {
  const { order, updateData, removeOrder, setTimerOff } = props;
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
          <span>{order.timer}</span>
          {/* <span>{`0${Math.floor(timer / 600000) % 60}:`.slice(-3)}</span>
          <span>{`0${Math.floor(timer / 60000) % 60}:`.slice(-3)}</span>
          <span>{`0${Math.floor(timer / 1000) % 60}`.slice(-2)}</span>  */}
        </div>
        <button
          type="button"
          className="order-ready-btn"
          onClick={() => {
            updateData(order);
            removeOrder(order);
            setTimerOff(false);
          }}
        >
          Listo
        </button>
      </div>
    </div>
  );
};

export default KitchenOrderItem;
