import React from 'react';

export default class Henke extends React.Component {
  render() {
    let hello = "Hej";
    return (
      <div>
        <h1>{hello} Henke</h1>
        document.getElementById('root')
        <p>Fria tester av JSX inom denna component.</p>
      </div>
    );
  }
}
