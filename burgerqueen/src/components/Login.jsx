import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import auth from '../firebase/firebaseConfig';
import Logo from '../assets/logo.png';
import FormLogin from './FormLogin';
import './styles/Login.scss';
import FormLogin from './FormLogin';

const Login = () => {
<<<<<<< HEAD
  const [error, setError] = useState('');

=======
>>>>>>> 9c0abc7 (instalacion de json-server, creacion de los metodos get, put, delet, post, end points con la data)
  const navigate = useNavigate();
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
      <FormLogin handleLogin={handleLogin} error={error} />
    </div>
  );
};

export default Login;
