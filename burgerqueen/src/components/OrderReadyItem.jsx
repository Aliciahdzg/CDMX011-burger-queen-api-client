/* eslint-disable react/prop-types */
import React from 'react';
import { Icon } from '@iconify/react';

const OrderReadyItem = (props) => {
  const { order, scrl } = props;
  return (
    <div className="container-info" ref={scrl}>
      <h3>{order.client}</h3>
      <div className="status-closeBtn">
        <p>{order.status}</p>
        <button type="button" className="btn">
          <Icon icon="carbon:close-filled" color="#f2884b" height="40" />
        </button>
      </div>
    </div>
  );
};

export default OrderReadyItem;
