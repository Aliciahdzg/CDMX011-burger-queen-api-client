/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import './styles/Header.scss';
import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';

const Header = (props) => {
  const { currentUser, handleLogout, setDate, setTime, today, time } = props;

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

  return (
    <div className="header">
      <div className="current-user">
        <Icon icon="vs:user-waiter" color="#f2884b" height="40" />
        <p>{currentUser.email}</p>
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
        onClick={() => handleLogout()}
      />
    </div>
  );
};

export default Header;
