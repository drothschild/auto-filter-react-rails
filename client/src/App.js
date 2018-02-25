import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
