/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

import auth from '../../firebase/firebaseConfig';
import Header from '../Header';

const Administrator = ({ isAuthenticate, setIsAuthenticate }) => {
  const navigate = useNavigate();

  const [today, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsAuthenticate(null);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header
        isAuthenticate={isAuthenticate}
        handleLogout={handleLogout}
        today={today}
        setDate={setDate}
        time={time}
        setTime={setTime}
      />
      <h3>Hola Admin</h3>
    </div>
  );
};

export default Administrator;
