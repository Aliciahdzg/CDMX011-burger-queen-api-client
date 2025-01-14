/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { helpHttp } from '../helpers/helpHttp';

import KitchenOrder from './KitchenOrder';
import Header from './Header';
import Logo from '../assets/upper-icon.png';

import './styles/Kitchen.scss';

const Kitchen = ({ userData, setUserData }) => {
  const [kitchenOrder, setKitchenOrder] = useState([]);

  const api = helpHttp();
  const urlK = 'https://menubq-api.herokuapp.com/kitchen';

  useEffect(() => {
    const endpoint = `${urlK}?status=pending`;
    api.get(endpoint).then((res) => {
      if (!res.err) {
        setKitchenOrder(res);
      } else {
        setKitchenOrder(res.err);
      }
    });
  }, []);

  const updateData = (data) => {
    const endpoint = `${urlK}/${data.id}`;
    const options = {
      body: { status: 'done' },
      headers: { 'Content-Type': 'application/json' }
    };
    api.patch(endpoint, options).then((res) => {
      if (res.err) {
        console.log(res.statusText);
      }
    });
  };

  const removeOrder = (item) => {
    const select = kitchenOrder.filter((x) => x.id !== item.id);
    setKitchenOrder(select);
  };

  const difference = (timeStart) => {
    const diff = new Date(timeStart);
    const diff2 = new Date();
    const test = diff2.getTime() - diff.getTime();
    let diffMins = Math.round(test / 60000); // minutes
    let unit = 'minutos';
    if (diffMins > 60) {
      Math.round((diffMins /= 60));
      unit = 'horas';
    }
    Swal.fire({
      title: 'Tiempo de Preparación',
      text: `La orden quedo lista en ${diffMins} ${unit}`,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  };

  return (
    <div className="kitchen-content">
      <Header userData={userData} setUserData={setUserData} />
      <div className="kitchen-titles">
        <img src={Logo} alt="Logo" className="logo-kitchen" />
        <h1>Órdenes en cocina</h1>
      </div>
      <div>
        <KitchenOrder
          kitchenOrder={kitchenOrder}
          updateData={updateData}
          removeOrder={removeOrder}
          difference={difference}
        />
        <div />
      </div>
    </div>
  );
};
export default Kitchen;
