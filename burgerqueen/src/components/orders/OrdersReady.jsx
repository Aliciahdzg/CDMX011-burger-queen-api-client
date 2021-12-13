/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { helpHttp } from '../../helpers/helpHttp';

import OrderReadyItem from './OrderReadyItem';

import '../styles/OrdersReady.scss';

const OrdersReady = () => {
  const [orderReady, setOrderReady] = useState([]);

  const api = helpHttp();
  const urlK = 'http://localhost:5000/kitchen';

  useEffect(() => {
    const endpoint = `${urlK}?status=pending&status=done`;
    api.get(endpoint).then((res) => {
      if (!res.err) {
        setOrderReady(res);
      } else {
        setOrderReady(res.err);
      }
    });
  }, []);

  const updateData = (data) => {
    const endpoint = `${urlK}/${data.id}`;
    const options = {
      body: { status: 'closed' },
      headers: { 'Content-Type': 'application/json' }
    };
    api.patch(endpoint, options).then((res) => {
      if (res.err) {
        console.log(res.statusText);
      }
    });
  };

  const removeOrder = (item) => {
    const select = orderReady.filter((x) => x.id !== item.id);
    setOrderReady(select);
  };

  return (
    <div className="container-done">
      <div className="items">
        {orderReady.map((order) => (
          <OrderReadyItem
            key={order.id}
            order={order}
            updateData={updateData}
            removeOrder={removeOrder}
          />
        ))}
      </div>
    </div>
  );
};

export default OrdersReady;
