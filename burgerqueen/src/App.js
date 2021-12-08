import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import auth from './firebase/firebaseConfig';

import Login from './components/Login';
import Orders from './components/Orders';
import Kitchen from './components/Kitchen';

function App() {
  const [isAuthenticate, setIsAuthenticate] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuthenticate(user);
    } else {
      setIsAuthenticate(null);
    }
  });
  return (
    <div className="App">
      <Router>
        {isAuthenticate ? (
          <Routes>
            <Route exact path="orders" element={<Orders />} />
            <Route exact path="kitchen" element={<Kitchen />} />
          </Routes>
        ) : (
          <Routes>
            <Route exact path="/" element={<Login />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
