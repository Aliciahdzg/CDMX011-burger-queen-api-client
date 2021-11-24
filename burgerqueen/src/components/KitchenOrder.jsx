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
          <KitchenOrderItem
            key={order.id}
            order={order}
            client={order.client}
            items={order.order.items.name}
            date={order.date}
            time={order.time}
          />
        ))}
      </div>
    </div>
  );
};
export default KitchenOrder;
