import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="row">
          <div className="col-sm-4">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
