import React from 'react';
import SendToTeamsButton from './tools/SendToTeamsButton';
import GenerateList from './tools/List';
import Game from './tools/TicTacToe/tictactoe'

export default class ViktorH extends React.Component {


  render() {
    let hackathon = {
      color: 'OrangeRed',
      fontSize: '130%'
    };

    let inputStyle = {
      width: '300px',
      marginTop: '5px',
      marginBottom: '5px',
    };

    let listEntries = [
      {property: "tid", value: "10-22"},
      {property: "mat", value: "pizza"},
      {property: "öl", value: "frivilligt"},
    ];

    return (
      <div>
        <h1>Välkommen Viktor Högberg,</h1>
        <h4>till denna upplaga av <span style={hackathon}>Hackaton!</span></h4>
        <GenerateList myList={listEntries}/>
        <p>Fria tester av JSX och React inom denna component...</p>
        <hr />
        <h4>Följ med på en oförglömglig resa till <span style={hackathon}>kodförståelse</span> med årets första <span style={hackathon}>hackaton</span></h4>
        <input id="inputForm" type="text" className="form form-control" style={inputStyle} ref={input => this.message = input} />
        <hr />
        <h2>Tic Tac Toe</h2>
        <Game />
      </div>
    );
  }
} 
// <SendToTeamsButton myMessage={this.message.value}/>