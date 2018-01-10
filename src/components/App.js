/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import NotFoundPage from './notFound/NotFoundPage';
import Sebbe from './sandbox/Sebbe';
import Henke from './sandbox/Henke';
import Alex from './sandbox/Alex';
import Peter from './sandbox/Peter';
import Viktor from './sandbox/Viktor';
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
          {' | '}
          <NavLink exact to="/sandbox/Alex" activeStyle={choosenStyle}>Alex</NavLink>
          {' | '}
          <NavLink exact to="/sandbox/Henke" activeStyle={choosenStyle}>Henke</NavLink>
          {' | '}
          <NavLink exact to="/sandbox/Peter" activeStyle={choosenStyle}>Peter</NavLink>
          {' | '}
          <NavLink exact to="/sandbox/Sebbe" activeStyle={choosenStyle}>Sebbe</NavLink>
          {' | '}
          <NavLink exact to="/sandbox/Viktor" activeStyle={choosenStyle}>Viktor</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/sandbox/Sebbe" component={Sebbe} />
          <Route exact path="/sandbox/Henke" component={Henke} />
          <Route exact path="/sandbox/Alex" component={Alex} />
          <Route exact path="/sandbox/Peter" component={Peter} />
          <Route exact path="/sandbox/Viktor" component={Viktor} />
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
