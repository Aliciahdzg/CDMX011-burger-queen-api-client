/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase/firebaseConfig';
import { helpHttp } from '../helpers/helpHttp';
import KitchenOrder from './KitchenOrder';
import Header from './Header';

const Kitchen = () => {
  const [kitchenOrder, setKitchenOrder] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [today, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const navigate = useNavigate();

  const api = helpHttp();
  const urlK = 'http://localhost:5000/kitchen';

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    }
  });

  useEffect(() => {
    api.get(urlK).then((res) => {
      if (!res.err) {
        setKitchenOrder(res);
      } else {
        setKitchenOrder(res.err);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Kitchen-content">
      <Header
        currentUser={currentUser}
        handleLogout={handleLogout}
        today={today}
        setDate={setDate}
        time={time}
        setTime={setTime}
      />
      <div>
        <h1>Kitchen orders</h1>
      </div>
      <div>
        <KitchenOrder
          kitchenOrder={kitchenOrder}
          setKitchenOrder={setKitchenOrder}
        />
        <div />
      </div>
    </div>
  );
};
export default Kitchen;
