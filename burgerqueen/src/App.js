import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

import auth, { db } from './firebase/firebaseConfig';

import Views from './components/Views';

function App() {
  const [isAuthenticate, setIsAuthenticate] = useState(null);

  const getRol = async (uid) => {
    const docuRef = doc(db, `users/${uid}`);
    const cipherDocu = await getDoc(docuRef);
    const finalInfo = cipherDocu.data().role;
    return finalInfo;
  };

  const setUserWithRole = (user) => {
    getRol(user.uid).then((role) => {
      const userData = {
        uid: user.uid,
        email: user.email,
        role
      };
      setIsAuthenticate(userData);
    });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserWithRole(user);
    } else {
      setIsAuthenticate(null);
    }
  });
  return (
    <div className="App">
      <Router>
        <Views isAuthenticate={isAuthenticate} />
      </Router>
    </div>
  );
}

export default App;
