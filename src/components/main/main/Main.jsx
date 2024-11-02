// Main.jsx

import React from 'react';
import './Main.css';
import About from "../about/About";
import WhyUs from "../why-us/WhyUs";
import Plans from "../plans/Plans";

const Main = ({ isLoggedIn, userTariff }) => {
  return (
    <div className="main-content">
        <About isLoggedIn={isLoggedIn} />
        <WhyUs />
        <Plans isLoggedIn={isLoggedIn} userTariff={userTariff} />
    </div>
  )
}

export default Main