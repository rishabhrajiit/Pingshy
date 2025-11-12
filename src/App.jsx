import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Feed from './components/Feed';
import Popular from './components/Popular';
import Login from './components/Login';
import Signup from './components/Signup';
import Explore from './components/Explore';
import useAppStore from './store/useAppStore';
import './App.css';

const App = () => {
  const { user } = useAppStore();
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  const [isLoggedIn, setIsLoggedIn] = useState(user !== null);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn.toString());
  }, [isLoggedIn]);

  return isAuthPage ? (
    <Routes>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  ) : (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="main-layout">
        <Sidebar />
        <div className="feed-wrapper w-[60vw] px-5">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/popular" element={<Popular />} />
             <Route path="/explore" element={<Explore />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
