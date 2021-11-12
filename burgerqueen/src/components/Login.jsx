import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase/firebaseConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // eslint-disable-next-line no-shadow
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('orders');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="login-container">
      <form>
        <h1>Iniciar Sesión</h1>
        <input
          placeholder="Correo electrónico"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          placeholder="Contraseña"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </form>
      <button
        type="button"
        className="login-btn"
        onClick={() => handleLogin(email, password)}
      >
        Iniciar Sesión
      </button>
    </div>
  );
};

export default Login;
