/* eslint-disable react/prop-types */
import React from 'react';
import { Icon } from '@iconify/react';

const OrderReadyItem = ({ order }) => {
  const { client, status } = order;

  return (
    <div className="container-info">
      <h3>{client}</h3>
      <div className="status-closeBtn">
        <p>{status}</p>
        <button type="button" className="btn">
          <Icon icon="carbon:close-filled" color="#f2884b" height="40" />
        </button>
      </div>
    </div>
  );
};

export default OrderReadyItem;
