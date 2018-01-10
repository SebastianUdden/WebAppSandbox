import React from 'react';

export default class Viktor extends React.Component {
  render() {
    let hackathon = {
      color: 'Red',
      fontSize: '200%'
    }
    return (
      <div>
        <h1>Viktor</h1>
        <p >Fria tester av JSX och React inom denna component.</p>
        <h4>Välkomna till denna upplaga av <span style={hackathon}>Hackaton!</span></h4>
        <img width="700px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" />
      </div>
    );
  }
}
