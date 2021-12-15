/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import './styles/Header.scss';
import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import auth from '../firebase/firebaseConfig';

const Header = ({ userData, setUserData }) => {
  const navigate = useNavigate();

  const [today, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const { email, role } = userData;

  useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserData(null);
      console.log('saliendo de app');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="header">
      <div className="current-user">
        {role === 'waiter' && (
          <Icon icon="vs:user-waiter" color="#f2884b" height="40" />
        )}
        {role === 'chef' && (
          <Icon icon="icon-park-outline:chef-hat" color="#f2884b" height="40" />
        )}
        {role === 'admin' && (
          <Icon icon="wpf:administrator" color="#f2884b" height="40" />
        )}
        <p> {email}</p>
      </div>
      <div className="current-time">
        <p> {today.toLocaleDateString()}</p>
        <p> {time.toLocaleTimeString()}</p>
      </div>
      <Icon
        className="logout"
        icon="ic:twotone-logout"
        color="#f2884b"
        height="40"
        onClick={() => {
          handleLogout();
        }}
      />
    </div>
  );
};

export default Header;
