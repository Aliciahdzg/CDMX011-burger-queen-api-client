/* eslint-disable no-plusplus */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { helpHttp } from '../../helpers/helpHttp';

import auth from '../../firebase/firebaseConfig';

import Logo from '../../assets/upper-icon.png';
import Breackfast from '../Breackfast';
import Header from '../Header';
import Lunch from '../Lunch';
import Resum from '../Resum';
import OrdersReady from './OrdersReady';

import '../styles/Orders.scss';
import '../styles/Menu.scss';

const Orders = ({ isAuthenticate, setIsAuthenticate }) => {
  const [breakfastMenu, setBreakfastMenu] = useState([]);
  const [lunchMenu, setLunchMenu] = useState([]);

  const [client, setClient] = useState('');

  const [resumItems, setResumItems] = useState([]);

  const [activeMenu, setActiveMenu] = useState('breakfast');

  const [today, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const navigate = useNavigate();

  const api = helpHttp();

  const urlB = 'http://localhost:5000/breakfastMenu';
  const urlL = 'http://localhost:5000/lunchMenu';
  const urlK = 'http://localhost:5000/kitchen';

  useEffect(() => {
    localStorage.setItem('orderList', JSON.stringify(resumItems));
  }, [resumItems]);

  useEffect(() => {
    api.get(urlB).then((res) => {
      if (!res.err) {
        setBreakfastMenu(res);
      } else {
        setBreakfastMenu(null);
      }
    });

    api.get(urlL).then((res) => {
      if (!res.err) {
        setLunchMenu(res);
      } else {
        setLunchMenu(null);
      }
    });
  }, [urlB, urlL]);

  const order = {
    client,
    status: 'pending',
    order: {
      items: resumItems,
      timeIn: today
    }
  };

  const addItem = (item) => {
    const exist = resumItems.find((x) => x.id === item.id);
    if (exist) {
      setResumItems(
        resumItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setResumItems([...resumItems, { ...item, qty: 1 }]);
    }
  };

  const removeItem = (item) => {
    const exist = resumItems.find((x) => x.id === item.id);
    if (exist === undefined) {
      return '';
    }
    if (exist.qty === 1) {
      return setResumItems(resumItems.filter((x) => x.id !== item.id));
    }
    return setResumItems(
      resumItems.map((x) =>
        x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
      )
    );
  };

  const removeAll = (item) => {
    const select = resumItems.filter((x) => x.id !== item.id);
    setResumItems(select);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsAuthenticate(null);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="orders-content">
      <Header
        isAuthenticate={isAuthenticate}
        handleLogout={handleLogout}
        today={today}
        setDate={setDate}
        time={time}
        setTime={setTime}
      />
      <div className="div-resum-menu">
        <div className="resum">
          <Resum
            removeAll={removeAll}
            resumItems={resumItems}
            setResumItems={setResumItems}
            client={client}
            setClient={setClient}
            order={order}
            api={api}
            urlK={urlK}
          />
        </div>
        <div className="menu">
          <div className="menu-options">
            <button
              type="button"
              className="breackfast-btn"
              onClick={() => {
                setActiveMenu('breakfast');
              }}
            >
              Desayuno
            </button>
            <button
              type="button"
              className="lunch-btn"
              onClick={() => {
                setActiveMenu('lunch');
              }}
            >
              Comida
            </button>
          </div>

          <div className="menu-food">
            {activeMenu === 'breakfast' && (
              <Breackfast
                addItem={addItem}
                removeItem={removeItem}
                breakfastMenu={breakfastMenu}
              />
            )}
            {activeMenu === 'lunch' && (
              <Lunch
                addItem={addItem}
                removeItem={removeItem}
                lunchMenu={lunchMenu}
              />
            )}
          </div>
        </div>
      </div>
      <div className="div-logo-orders">
        <img src={Logo} alt="Logo" className="logo-orders-img" />
        <OrdersReady time={time} setTime={setTime} />
      </div>
    </div>
  );
};
export default Orders;