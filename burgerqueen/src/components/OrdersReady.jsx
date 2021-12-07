/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';

import OrderReadyItem from './OrderReadyItem';

import './styles/OrdersReady.scss';

const OrdersReady = () => {
  const [orderReady, setOrderReady] = useState([]);

  const api = helpHttp();
  const urlK = 'http://localhost:5000/kitchen';

  useEffect(() => {
    const endpoint = urlK;
    api.get(endpoint).then((res) => {
      if (!res.err) {
        setOrderReady(res);
      } else {
        setOrderReady(res.err);
      }
    });
  }, []);

  return (
    <div className="container-done">
      <div className="items">
        {orderReady.map((order) => (
          <OrderReadyItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrdersReady;
