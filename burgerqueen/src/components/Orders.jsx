import React, { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../firebase/firebaseConfig';
import Breackfast from './Breackfast';
import Lunch from './Lunch';
import Resum from './Resum';
import data from '../data';

const Orders = () => {
  const { breakfastMenu, lunchMenu } = data;
  const [resumItems, setResumItems] = useState([]);
  const [activeMenu, setActiveMenu] = useState('breakfast');
  const [currentUser, setCurrentUser] = useState({});

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
    if (exist.qty === 1) {
      setResumItems(resumItems.filter((x) => x.id !== item.id));
    } else {
      setResumItems(
        resumItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
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

  return (
    <div>
      <h1>Estoy en Orders</h1>
      <p>{currentUser.email}</p>
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
        <div className="menu">
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
      <div className="resum">
        <Resum removeAll={removeAll} resumItems={resumItems} />
      </div>
    </div>
  );
};
export default Orders;
