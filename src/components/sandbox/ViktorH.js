import React from 'react';
import SendToTeamsButton from './tools/SendToTeamsButton';

export default class ViktorH extends React.Component {


  render() {
    let hackathon = {
      color: 'OrangeRed',
      fontSize: '130%'
    };
    let bolder = {
      fontWeight: '700',
      color: 'MediumSpringGreen',
    };
    let info = {
      time: '10-22',
      food: 'Pizza',
      beer: 'Frivilligt',
    }

    let inputStyle = {
      width: '300px',
      marginTop: '5px',
      marginBottom: '5px',
    }
    return (
      <div>
        <h1>Välkommen Viktor Högberg,</h1>
        <h4>till denna upplaga av <span style={hackathon}>Hackaton!</span></h4>
        <ul>
          <li><span style={bolder}>Tid:</span> {info.time}</li>
          <li><span style={bolder}>Mat:</span> {info.food}</li>
          <li><span style={bolder}>Öl:</span> {info.beer}</li>
        </ul>
        <p>Fria tester av JSX och React inom denna component...</p>
        <hr />
        <h4>Följ med på en oförglömglig resa till <span style={hackathon}>kodförståelse</span> med årets första <span style={hackathon}>hackaton</span></h4>
        <input id="inputForm" type="text" className="form form-control" style={inputStyle} ref={input => this.message = input} />
        
        <SendToTeamsButton myMessage={this.message.value}/>

        <img width="1000px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTX4HgyT3L9Ul8Dm1Jicsrg2ZO9uPHIxyuGXlTO5cXjps42UfYw" />
      </div>
    );
  }
}
