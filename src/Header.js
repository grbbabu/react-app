import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header-header">
                <img src={logo} className="Header-logo" alt="logo" />
                <h2>Welcome to React</h2>
                </div>
                <p className="Header-intro">
                To get started, edit <code>src/Header.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default Header;
