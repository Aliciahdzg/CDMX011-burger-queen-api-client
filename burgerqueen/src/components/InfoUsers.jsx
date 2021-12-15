/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';

import { collection, onSnapshot, query } from '@firebase/firestore';
import { db } from '../firebase/firebaseConfig';

import InfoUsersItem from './InfoUsersItem';

const InfoUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const renderUsers = () => {
      try {
        onSnapshot(query(collection(db, 'users')), (querySnapshot) => {
          const documents = [];
          querySnapshot.forEach((doc) => {
            documents.push({ id: doc.id, ...doc.data() });
          });
          setUsers(documents);
        });
      } catch (error) {
        console.log(error);
      }
    };
    return renderUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <InfoUsersItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default InfoUsers;
