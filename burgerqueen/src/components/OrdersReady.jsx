/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { helpHttp } from '../helpers/helpHttp';
import OrderReadyItem from './OrderReadyItem';
import './styles/OrdersReady.scss';

const OrdersReady = () => {
  const [orderReady, setOrderReady] = useState([]);
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  // eslint-disable-next-line no-unused-vars
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling

  const scrl = useRef(null);

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

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift); // Updates the latest scrolled postion

    // For checking if the scroll has ended
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      // setscrolEnd(true);
    } else {
      // setscrolEnd(false);
    }
  };

  return (
    <div className="container-done">
      <div className="horizontal-scroll">
        <button type="button" className="btn-scroll" onClick={() => slide(-50)}>
          <Icon icon="fe:arrow-left" color="#f2884b" height="80" />
        </button>
        <button type="button" className="btn-scroll" onClick={() => slide(+50)}>
          <Icon icon="fe:arrow-right" color="#f2884b" height="80" />
        </button>
      </div>
      <div className="items">
        {orderReady.map((order) => (
          <OrderReadyItem key={order.id} order={order} scrl={scrl} />
        ))}
      </div>
    </div>
  );
};

export default OrdersReady;
