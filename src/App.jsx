import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <Feed />
        <Footer />
      </div>
    </>
  );
}

export default App;
