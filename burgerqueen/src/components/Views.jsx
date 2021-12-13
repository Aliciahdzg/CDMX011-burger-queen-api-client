/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './Login';
import Orders from './orders/Orders';
import Kitchen from './kitchen/Kitchen';
import Administrator from './admin/Administrator';

const Views = ({ isAuthenticate, setIsAuthenticate, getRol }) => (
  <div>
    {isAuthenticate ? (
      <Routes>
        <Route
          exact
          path="orders"
          element={
            <Orders
              isAuthenticate={isAuthenticate}
              setIsAuthenticate={setIsAuthenticate}
            />
          }
        />
        <Route
          exact
          path="kitchen"
          element={
            <Kitchen
              isAuthenticate={isAuthenticate}
              setIsAuthenticate={setIsAuthenticate}
            />
          }
        />
        <Route
          exact
          path="admin"
          element={
            <Administrator
              isAuthenticate={isAuthenticate}
              setIsAuthenticate={setIsAuthenticate}
            />
          }
        />
      </Routes>
    ) : (
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Login getRol={getRol} setIsAuthenticate={setIsAuthenticate} />
          }
        />
      </Routes>
    )}
  </div>
);

export default Views;
