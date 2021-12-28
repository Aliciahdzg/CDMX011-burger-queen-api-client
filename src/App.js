import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import auth, { db } from './firebase/firebaseConfig';

import Orders from './components/Orders';
import Kitchen from './components/Kitchen';
import Login from './components/Login';
import Administrator from './components/Administrator';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [userData, setUserData] = useState(null);
  const getRol = async (uid) => {
    const docuRef = doc(db, `users/${uid}`);
    const cipherDocu = await getDoc(docuRef);
    const finalInfo = cipherDocu.data().role;
    return finalInfo;
  };

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      setUserData(null);
    }
  });
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/orders"
            element={
              <PrivateRoute>
                <Orders userData={userData} />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/"
            element={
              <Login
                userData={userData}
                setUserData={setUserData}
                getRol={getRol}
              />
            }
          />
          <Route
            exact
            path="/kitchen"
            element={
              <PrivateRoute>
                <Kitchen userData={userData} setUserData={setUserData} />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/admin"
            element={
              <PrivateRoute>
                <Administrator userData={userData} setUserData={setUserData} />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
