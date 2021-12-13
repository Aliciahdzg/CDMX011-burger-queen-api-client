/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { doc, getDoc } from 'firebase/firestore';
import auth, { db } from '../firebase/firebaseConfig';

import Logo from '../assets/logo.png';
import FormLogin from './FormLogin';

import './styles/Login.scss';

const Login = ({ getRol, setUserData }) => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const signIn = await signInWithEmailAndPassword(auth, email, password);

      const retrievedRol = await getRol(auth.currentUser.uid);
      const data = {
        uid: auth.currentUser.uid,
        email: auth.currentUser.email,
        role: retrievedRol
      };
      setUserData(data);
      console.log('userData final', data);
      if (retrievedRol === 'waiter') {
        navigate('orders');
      } else if (retrievedRol === 'chef') {
        navigate('kitchen');
      } else if (retrievedRol === 'admin') {
        navigate('admin');
      } else {
        navigate('/');
      }
      console.log('im signIn', signIn);
      const user = auth.currentUser;
      if (user) {
        console.log(user);
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
