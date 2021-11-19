/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { Icon } from '@iconify/react';
import auth from '../firebase/firebaseConfig';
import Logo from '../assets/logo.png';
import './styles/Login.scss';

const Login = (props) => {
  const { navigate } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('orders');
      })
      .catch(() => {
        setError('Contraseña y/o correo inválidos');
        setTimeout(() => setError(''), 2500);
      });
  };

  return (
    <div className="login-container">
      <img src={Logo} alt="Logo" className="logo" />
      <form className="login-form">
        <h1>Iniciar Sesión</h1>
        <div className="div-email">
          <Icon icon="carbon:email" color="#f3e1cb" height="40" />
          <input
            type="email"
            placeholder="Correo electrónico"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
      </form>
      <button
        type="button"
        className="login-btn"
        onClick={() => {
          handleLogin(email, password);
        }}
      >
        Iniciar Sesión
      </button>
    </div>
  );
};

export default Login;
