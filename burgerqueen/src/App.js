import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate
} from 'react-router-dom';

import Login from './components/Login';
import Orders from './components/Orders';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} navigate={navigate} />
          <Route exact path="orders" element={<Orders />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
