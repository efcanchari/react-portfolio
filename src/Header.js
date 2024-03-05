import React, { Component } from 'react';
import logo from './logo.svg'; // Adjust the path as necessary
import './App.css'; // Adjust the path as necessary if your CSS is specific to the entire app

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React 2
                </a>
            </header>
        );
    }
}

export default Header;
