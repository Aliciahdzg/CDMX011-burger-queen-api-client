/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Icon } from '@iconify/react';

import './styles/Login.scss';

const FormLogin = ({ handleLogin, error, handlePersistance }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-container">
      <form className="login-form">
        <h1>Inicia Sesión</h1>
        <div className="div-email">
          <Icon icon="carbon:email" color="#f3e1cb" height="40" />
          <input
            type="email"
            placeholder="Correo electrónico"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="div-password">
          <Icon
            className="icon-pass"
            icon="teenyicons:password-outline"
            color="#f3e1cb"
            height="40"
          />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {error && <p className="error">{error}</p>}
      </form>
      <button
        type="button"
        className="login-btn"
        onClick={() => {
          handleLogin(email, password);
          handlePersistance();
        }}
      >
        Iniciar Sesión
      </button>
    </div>
  );
};

export default FormLogin;
