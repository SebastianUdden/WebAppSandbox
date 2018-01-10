/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import NotFoundPage from './notFound/NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const choosenStyle = { color: '#5bb7db' };
    const header = { marginTop: '3vh', fontSize: '140%' };
    return (
      <div>
        <div style={header}>
          <NavLink exact to="/" activeStyle={choosenStyle}>Home</NavLink>
          {' | '}
          <NavLink exact to="/about" activeStyle={choosenStyle}>About</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
