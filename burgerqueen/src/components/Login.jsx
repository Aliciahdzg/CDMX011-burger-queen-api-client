import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import auth from '../firebase/firebaseConfig';
import Logo from '../assets/logo.png';
import './styles/Login.scss';
import FormLogin from './FormLogin';

const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
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
      <FormLogin handleLogin={handleLogin} error={error} />
    </div>
  );
};

export default Login;
