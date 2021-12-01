/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { helpHttp } from '../helpers/helpHttp';
import OrderReadyItem from './OrderReadyItem';
import './styles/OrdersReady.scss';

const OrdersReady = () => {
  const [orderReady, setOrderReady] = useState([]);

  const api = helpHttp();
  const urlK = 'http://localhost:5000/kitchen';

  useEffect(() => {
    const endpoint = `${urlK}?status=done`;
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
      <div>
        <button type="button" className="prev-btn">
          <Icon icon="fe:arrow-left" color="#f2884b" height="40" />
        </button>
      </div>
      <div className="items">
        {orderReady.map((order) => (
          <OrderReadyItem key={order.id} order={order} />
        ))}
      </div>
      <div>
        <button type="button" className="next-btn">
          <Icon icon="fe:arrow-right" color="#f2884b" height="40" />
        </button>
      </div>
    </div>
  );
};

export default OrdersReady;
