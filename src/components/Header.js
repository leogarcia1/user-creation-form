import React from 'react';
import './Header.css';
import logo from '../images/logo.png'

export default function Header() {
  return (
    <div className='header'>

    <img src={logo} alt="Logo" className='logo'/>

    <div>
        <span className='title'>FETCH REWARDS: </span>
        <span className='subtitle'>Frontend Take-Home Exercise</span>
    </div>

    <div className='info-container'>
        <span>Leonardo Garcia Calderon</span>
        <span>336.558.7391</span>
        <span>gc13leo@gmail.com</span>
        <a href="https://www.linkedin.com/in/leogarciacalderon/" rel="noreferrer">LinkedIn</a>
    </div>

    </div>
  );
}