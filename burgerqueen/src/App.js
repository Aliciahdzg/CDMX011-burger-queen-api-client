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
  const [userData, setUserData] = useState({});
  const [userAuth, setUserAuth] = useState(null);
  const getRol = async (uid) => {
    const docuRef = doc(db, `users/${uid}`);
    const cipherDocu = await getDoc(docuRef);
    const finalInfo = cipherDocu.data().role;
    return finalInfo;
  };

  const setUserWithRole = (user) => {
    getRol(user.uid).then((role) => {
      const data = {
        uid: user.uid,
        email: user.email,
        role
      };
      setUserData(data);
      console.log('userData final', data);
    });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserAuth(user);
      if (!userData) {
        setUserWithRole(user);
      }
    } else {
      setUserAuth(null);
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
                <Orders
                  userData={userData}
                  setUserAuth={setUserAuth}
                  userAuth={userAuth}
                />
              </PrivateRoute>
            }
          />
          <Route exact path="/" element={<Login userData={userData} />} />
          <Route
            exact
            path="/kitchen"
            element={
              <PrivateRoute>
                <Kitchen
                  userData={userData}
                  setUserAuth={setUserAuth}
                  userAuth={userAuth}
                  setUserData={setUserData}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/admin"
            element={
              <PrivateRoute>
                <Administrator />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
