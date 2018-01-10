import React from 'react';

export default class Alex extends React.Component {
  render() {
    let hello = "hej";
    return (
      <div>
        <h1>{hello} Alex</h1>
        <p>Fria tester av JSX inom denna component!!</p>
      </div>
    );
  }
}
