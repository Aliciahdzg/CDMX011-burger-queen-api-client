/* eslint-disable react/prop-types */
import React from 'react';
import KitchenOrderItem from './KitchenOrderItem';

const KitchenOrder = (props) => {
  const { kitchenOrder, updateData, removeOrder, timer, setTimerOff } = props;
  return (
    <div>
      <div className="main-container">
        {kitchenOrder.map((order) => (
          <KitchenOrderItem
            key={order.id}
            order={order}
            updateData={updateData}
            removeOrder={removeOrder}
            timer={timer}
            setTimerOff={setTimerOff}
          />
        ))}
      </div>
    </div>
  );
};
export default KitchenOrder;
