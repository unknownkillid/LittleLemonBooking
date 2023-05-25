import React from 'react';
import './App.css';
import navbarLogo from './assets/littlelemonlogo.png'

const ReservationPage = () => {
  return (
    <div>
     <header>
                <div className="navbar-container">
                    <img src={navbarLogo} alt="" className="navbarlogo" />
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Menu</a>
                    <a href="#">Reservations</a>
                    <a href="#">OlderOnline</a>
                    <a href="#">Login</a>
                </div>
            </header>
    </div>
  );
};

export default ReservationPage;