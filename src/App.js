import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import HomePage from "./HomePage";
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <HomePage />
            <ProjectsPage />
            <ContactPage />
        </div>
    );
  }
}

export default App;
