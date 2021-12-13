/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import './styles/Header.scss';
import React, { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import auth from '../firebase/firebaseConfig';

const Header = ({ setDate, setTime, today, time, setUserAuth, userAuth }) => {
  const navigate = useNavigate();
  const { email } = userAuth;

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
      setUserAuth(null);
      console.log('saliendo de app');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="header">
      <div className="current-user">
        {email === 'meseros@burgerqueen.com' && (
          <Icon icon="vs:user-waiter" color="#f2884b" height="40" />
        )}
        {email === 'cocina@burgerqueen.com' && (
          <Icon icon="icon-park-outline:chef-hat" color="#f2884b" height="40" />
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
