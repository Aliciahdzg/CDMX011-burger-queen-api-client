/* eslint-disable react/prop-types */
import React from 'react';
import KitchenOrderItem from './KitchenOrderItem';

const KitchenOrder = ({
  kitchenOrder,
  updateData,
  removeOrder,
  difference
}) => (
  <div>
    <div className="main-container">
      {kitchenOrder.map((order) => (
        <KitchenOrderItem
          key={order.id}
          order={order}
          updateData={updateData}
          removeOrder={removeOrder}
          difference={difference}
        />
      ))}
    </div>
  </div>
);
export default KitchenOrder;
