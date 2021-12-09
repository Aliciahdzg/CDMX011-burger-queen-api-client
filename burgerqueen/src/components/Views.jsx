/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './Login';
import Orders from './Orders';
import Kitchen from './Kitchen';
import Administrator from './Administrator';

const Views = ({ isAuthenticate }) => (
  <div>
    {isAuthenticate ? (
      <Routes>
        <Route
          exact
          path="orders"
          element={<Orders isAuthenticate={isAuthenticate} />}
        />
        <Route
          exact
          path="kitchen"
          element={<Kitchen isAuthenticate={isAuthenticate} />}
        />
        <Route
          exact
          path="admin"
          element={<Administrator isAuthenticate={isAuthenticate} />}
        />
      </Routes>
    ) : (
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    )}
  </div>
);

export default Views;
