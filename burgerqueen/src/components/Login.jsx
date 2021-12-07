/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import auth from '../firebase/firebaseConfig';

import Logo from '../assets/logo.png';
import FormLogin from './FormLogin';

import './styles/Login.scss';

const Login = () => {
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (email === 'meseros@burgerqueen.com') {
        navigate('orders');
      } else if (email === 'cocina@burgerqueen.com') {
        navigate('kitchen');
      }
    } catch (error) {
      setError('Contraseña y/o correo inválidos');
      setTimeout(() => setError(''), 2500);
    }
  };

  return (
    <div className="login-container">
      <img src={Logo} alt="Logo" className="logo" />
      <FormLogin handleLogin={handleLogin} error={error} />
    </div>
  );
};

export default Login;
