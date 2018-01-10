import React from 'react';

export default class Viktor extends React.Component {
  render() {
    let hackathon = {
      color: 'Red',
      fontSize: '200%'
    }
    
    return (
      <div>
        <h1>Välkommen Viktor</h1>
        <p >Fria tester av JSX och React inom denna component.</p>
        <h4>Välkomna till denna upplaga av <span style={hackathon}>Hackaton!</span></h4>
        <h4>Följ med på en oförglömglig resa till kodförståelsen med årets <span style={hackathon}>Hackaton</span></h4>
        <img width="700px" src="http://www.simpleimageresizer.com/_uploads/photos/c824bb96/hackathonViktor_99.jpg" />
<p> Från 10 till 22 kör vi igång. </p>
      </div>
    );
  }
  
}
