import React from 'react';

export default class Peter extends React.Component {
  render() {
    let red = {
      color: "Red"
    };
    let h1 = {
      fontSize: "36px"
    };
    return (
      <div>
        <h1 style={{...h1,...red}}>Välkommen Peter</h1>
        <p>Fria tester av JSX inom denna component.</p>
      </div>
    );
  }
}
