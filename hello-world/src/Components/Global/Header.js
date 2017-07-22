import React, { Component } from 'react';
import logo from './Imagenes/logo.svg'
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div>
          <img src={logo} className="Logo" alt="logo" />
        </div>
        <h2>Hello World React</h2>
      </div>
    );
  }
}

export default Header;
