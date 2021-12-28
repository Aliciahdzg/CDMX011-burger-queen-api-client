/* eslint-disable react/prop-types */
import React from 'react';
import { Icon } from '@iconify/react';

const OrderReadyItem = ({ order, updateData, removeOrder }) => {
  const { client, status } = order;

  const pDone = {
    backgroundColor: '#45902cce'
  };

  const pPending = {
    backgroundColor: '#F2C744'
  };

  return (
    <div className="container-info">
      <h3>{client}</h3>
      <div className="status-closeBtn">
        {status === 'done' && <p style={pDone}>{status}</p>}
        {status === 'pending' && <p style={pPending}>{status}</p>}
        <button
          type="button"
          className="btn"
          onClick={() => {
            updateData(order);
            removeOrder(order);
          }}
        >
          {status === 'done' && (
            <Icon icon="carbon:close-filled" color="#f2884b" height="40" />
          )}
        </button>
      </div>
    </div>
  );
};

export default OrderReadyItem;
