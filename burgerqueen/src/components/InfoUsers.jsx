import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

import UsersInfoItem from './UsersInfoItem';

function InfoUsers() {
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
    <>
      {users.map((user) => (
        <UsersInfoItem user={user} key={user.id} />
      ))}
    </>
  );
}

export default InfoUsers;
