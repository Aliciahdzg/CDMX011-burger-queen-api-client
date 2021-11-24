/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
// import Header from './Header';
import { helpHttp } from '../helpers/helpHttp';
import KitchenOrder from './KitchenOrder';

const Kitchen = () => {
  const api = helpHttp();
  const urlK = 'http://localhost:5000/kitchen';

  const [kitchenOrder, setKitchenOrder] = useState([]);

  useEffect(() => {
    api.get(urlK).then((res) => {
      if (!res.err) {
        setKitchenOrder(res);
      } else {
        setKitchenOrder(res.err);
      }
    });
  }, []);

  return (
    <div className="Kitchen-content">
      <div>
        <h1>Kitchen orders</h1>
      </div>
      <div>
        <KitchenOrder
          kitchenOrder={kitchenOrder}
          setKitchenOrder={setKitchenOrder}
        />
        <div />
      </div>
    </div>
  );
};
export default Kitchen;
