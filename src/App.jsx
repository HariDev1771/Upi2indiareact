import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Addtobasketpage from './components/Addtobasketpage';
import IndividualOccasionpage from './components/IndividualOccasionpage';
import Mainpage from './components/Mainpage';
import Occassionpage from './components/Occassionpage';
import Login from './components/Login'; // Assuming Login component is created
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulate authentication

  const login = () => {
    setIsAuthenticated(true); // Call this after successful login
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Login onLogin={login} />} />

          {/* Protect routes that require authentication */}
          <Route
            path="/occasion"
            element={
              isAuthenticated ? <Occassionpage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/occasioncard"
            element={
              isAuthenticated ? <IndividualOccasionpage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/addtobasket"
            element={
              isAuthenticated ? <Addtobasketpage /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
