import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Orders from './components/Orders';
import Kitchen from './components/Kitchen';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="orders" element={<Orders />} />
          <Route exact path="kitchen" element={<Kitchen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
