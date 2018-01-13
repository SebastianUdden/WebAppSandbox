import React from 'react';

export default class Alex extends React.Component {
  handleClick(name) {
    alert(`Hej ${name}`);
  }
  render() {
    let input = {
      width: '40vw',
      marginTop: '5px',
      marginBottom: '5px',
    };
    let hackathon = {
      color: 'OrangeRed',
      fontSize: '130%',
    };
    let bolder = {
      fontWeight: '700',
      color: 'MediumSpringGreen',
    };
    let info = {
      time: '10-22',
      food: 'Pizza',
      beer: 'Frivilligt',
    };
    let button = {
      width: '20vw',
      backgroundColor: 'red',
    };
    return (
      <div>
        <h1>Välkommen Alex,</h1>
        <h4>till denna upplaga av <span style={hackathon}>Hackaton!</span></h4>
        <ul>
          <li><span style={bolder}>Tid:</span> {info.time}</li>
          <li><span style={bolder}>Mat:</span> {info.food}</li>
          <li><span style={bolder}>Öl:</span> {info.beer}</li>
        </ul>
        <p>Fria tester av JSX och React inom denna component...</p>
        <hr />
        <h4>Följ med på en oförglömglig resa till <span style={hackathon}>kodförståelse</span> med årets första <span style={hackathon}>hackaton</span></h4>
        <input style={input} type="text" className="form-control"/>
        <button style={button} className="btn btn-success" onClick={() => this.handleClick("Alex")}>Click!</button>
        <hr />
        <img width="1000px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTX4HgyT3L9Ul8Dm1Jicsrg2ZO9uPHIxyuGXlTO5cXjps42UfYw" />
      </div>
    );
  }
}
