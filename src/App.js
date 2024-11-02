import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

import './App.css';


import './fonts/ferry.otf';
import './fonts/InterRegular.ttf';
import './fonts/InterMedium.ttf';
import './fonts/InterBold.ttf';

import Header from './components/header/Header';
import Main from './components/main/main/Main';
import Footer from './components/footer/Footer';
import Authorization from './components/main/authorization/Authorization';
import Search from './components/search/MainSearch/Search';
import SearchResults from './components/search-results/SearchResults';
import user_pic_example from './assets/pics/user_pic_example.png';

function App() {
  const { isLoggedIn, checkAuthStatus } = useAuth();
  const [userTariff, setUserTariff] = useState('beginner');
  const [userName, setUserName] = useState('');
  const [userPicture, setUserPicture] = useState(user_pic_example);
  
  useEffect(() => {
    if (!isLoggedIn) {
        console.log("The user is not logged in, update the UI");
      }
  }, [isLoggedIn]);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  return (
    <Router>
      <div className="app-container">
        <Header isLoggedIn={isLoggedIn} userName={userName} setUserName={setUserName} userPicture={userPicture} setUserPicture={setUserPicture} />
        <Routes>
          <Route path="/" element={<Main isLoggedIn={isLoggedIn} userTariff={userTariff} />} /> 
          <Route path="/auth" element={<Authorization />} />
          <Route path="/search" element={isLoggedIn ? <Search /> : <Authorization redirectBack="/search" />} />
          <Route path="/results" element={isLoggedIn ? <SearchResults /> : <Authorization redirectBack="/results" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

