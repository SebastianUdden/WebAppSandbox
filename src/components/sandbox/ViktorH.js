import React from 'react';

export default class ViktorH extends React.Component {
  render() {
    let hackathon = {
      color: 'Red',
      fontSize: '200%'
    };

    return (
      <div>
        <h1>Välkommen Viktor H,</h1>
        <h4>till denna upplaga av <span style={hackathon}>Hackaton!</span></h4>
        <p>Från 10 till 22 kör vi igång.</p>
        <p>Fria tester av JSX och React inom denna component...</p>
        <hr />
        <h4>Följ med på en oförglömglig resa till kodförståelse med årets första <span style={hackathon}>Hackaton</span></h4>
        <img width="700px" src="http://www.simpleimageresizer.com/_uploads/photos/c824bb96/hackathonViktor_99.jpg" />
      </div>
    );
  }

}
