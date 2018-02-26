import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Search from './components/Search';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="router">
            <Link to="Search" className="search-link">
              Search
            </Link>
            <Route path="/search" component={Search} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
