import React, { useState } from 'react';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Data from '../Data';
import Resum from './Resum';

const Orders = () => {
  const { breakfastMenu, lunchMenu } = Data;
  const [resumItems, setResumItems] = useState([]);
  const [activeMenu, setActiveMenu] = useState('breakfast');

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
  return (
    <div>
      <h1>Estoy en Orders</h1>
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
        <div className="menu">
          {activeMenu === 'breakfast' && (
            <Breakfast
              breakfastMenu={breakfastMenu}
              removeItem={removeItem}
              addItem={addItem}
            />
          )}
          {activeMenu === 'lunch' && (
            <Lunch
              lunchMenu={lunchMenu}
              removeItem={removeItem}
              addItem={addItem}
            />
          )}
        </div>
      </div>
      <div className="resum">
        <Resum
          addItem={addItem}
          resumItems={resumItems}
          removeAll={removeAll}
        />
      </div>
    </div>
  );
};

export default Orders;
