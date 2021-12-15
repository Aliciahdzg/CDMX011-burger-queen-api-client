/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import Header from './Header';
import Users from './Users';
import Menu from './Menu';

const Administrator = ({ userData, setUserData }) => {
  const [activeOption, setActiveOption] = useState('users');

  return (
    <div>
      <Header userData={userData} setUserData={setUserData} />
      <h3>Hola Admin</h3>
      <div className="admin">
        <div className="admin-options">
          <button
            type="button"
            className="users-btn"
            onClick={() => {
              setActiveOption('users');
            }}
          >
            Usuarios
          </button>
          <button
            type="button"
            className="menu-btn"
            onClick={() => {
              setActiveOption('menu');
            }}
          >
            Menú
          </button>
        </div>

        <div className="active-option">
          {activeOption === 'users' && <Users />}
          {activeOption === 'menu' && <Menu />}
        </div>
      </div>
    </div>
  );
};

export default Administrator;