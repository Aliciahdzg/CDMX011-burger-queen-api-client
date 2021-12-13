/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate } from 'react-router-dom';
import auth from '../firebase/firebaseConfig';

const PrivateRoute = ({ children }) => {
  const user = auth.currentUser;
  return user ? children : <Navigate to="/" />;
};
export default PrivateRoute;
