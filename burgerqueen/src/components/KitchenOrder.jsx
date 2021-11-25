/* eslint-disable react/prop-types */
import React from 'react';
import KitchenOrderItem from './KitchenOrderItem';

const KitchenOrder = (props) => {
  const { kitchenOrder } = props;
  return (
    <div className="lista">
      {kitchenOrder.map((order) => (
        <KitchenOrderItem key={order.id} order={order} />
      ))}
    </div>
  );
};
export default KitchenOrder;
