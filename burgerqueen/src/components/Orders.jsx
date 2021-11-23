/* eslint-disable react-hooks/exhaustive-deps */
import './styles/Orders.scss';
import './styles/Menu.scss';
import './styles/Header.scss';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Logo from '../assets/upper-icon.png';
import auth from '../firebase/firebaseConfig';
import Breackfast from './Breackfast';
import Header from './Header';
import Lunch from './Lunch';
import Resum from './Resum';
import { helpHttp } from '../helpers/helpHttp';

<<<<<<< HEAD
const Orders = () => {
  const [breakfastMenu, setBreakfastMenu] = useState([]);
  const [lunchMenu, setLunchMenu] = useState([]);
  const [client, setClient] = useState('');
=======
function Orders() {
  const [breakfastMenu, setBreakfastMenu] = useState([]);
  const [lunchMenu, setLunchMenu] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [orders, setOrders] = useState([]);
>>>>>>> 9c0abc7 (instalacion de json-server, creacion de los metodos get, put, delet, post, end points con la data)
  const [resumItems, setResumItems] = useState([]);
  const [activeMenu, setActiveMenu] = useState('breakfast');
  const [currentUser, setCurrentUser] = useState({});

  const [today, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const navigate = useNavigate();

  const api = helpHttp();
<<<<<<< HEAD

  const urlB = 'http://localhost:5000/breakfastMenu';
  const urlL = 'http://localhost:5000/lunchMenu';
  const urlK = 'http://localhost:5000/kitchen';

  useEffect(() => {
    localStorage.setItem('orderList', JSON.stringify(resumItems));
  }, [resumItems]);
=======
  const urlL = 'http://localhost:5000/lunchMenu';
  const urlB = 'http://localhost:5000/breakfastMenu';
  const urlO = 'http://localhost:5000/orders';
>>>>>>> 9c0abc7 (instalacion de json-server, creacion de los metodos get, put, delet, post, end points con la data)

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

<<<<<<< HEAD
  const order = {
    client,
    status: 'pending',
    order: {
      items: resumItems,
      date: today.toLocaleDateString(),
      time: time.toLocaleTimeString()
    }
=======
  // eslint-disable-next-line no-unused-vars
  const createOrder = (data) => {
    const options = {
      body: data,
      headers: { 'content-type': 'application/json' }
    };
    api.post(urlO, options).then((res) => {
      if (!res.err) {
        setOrders(res);
      } else {
        setOrders(res.err);
      }
    });
>>>>>>> 9c0abc7 (instalacion de json-server, creacion de los metodos get, put, delet, post, end points con la data)
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

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    }
  });

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  return (
    <div className="orders-content">
      <Header
        currentUser={currentUser}
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
<<<<<<< HEAD
            setResumItems={setResumItems}
            client={client}
            setClient={setClient}
            order={order}
            api={api}
            urlK={urlK}
=======
            createOrder={createOrder}
>>>>>>> 9c0abc7 (instalacion de json-server, creacion de los metodos get, put, delet, post, end points con la data)
          />
        </div>
        <div className="menu">
          <div className="menu-options">
            <button
              type="button"
              className="breackfast-btn"
              onClick={() => setActiveMenu('breakfast')}
            >
              Desayuno
            </button>
            <button
              type="button"
              className="lunch-btn"
              onClick={() => setActiveMenu('lunch')}
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
      </div>
    </div>
  );
}
export default Orders;
