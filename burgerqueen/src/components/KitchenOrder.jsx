/* eslint-disable react/prop-types */
import React from 'react';
import KitchenOrderItem from './KitchenOrderItem';

const KitchenOrder = (props) => {
  const { kitchenOrder } = props;
  return (
    <div>
      <div>Estas son las ordenes</div>
      <div>
        {kitchenOrder.map((order) => (
          <KitchenOrderItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};
export default KitchenOrder;
