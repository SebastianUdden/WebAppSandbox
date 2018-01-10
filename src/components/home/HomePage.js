import React from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron" style={{backgroundColor: "inherit"}}>
        <h1>Welcome to the WebApp</h1>
        <p>This site is a baseline web app created by Sebastian Uddén with the React Slingshot as a baseline. Technologies include React, Redux and React Router.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}
