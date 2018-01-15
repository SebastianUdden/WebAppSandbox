import React from 'react';
import SendToTeamsButton from './tools/SendToTeamsButton';
import GenerateList from './tools/List';
import Game from './tools/TicTacToe/tictactoe';

export default class ViktorH extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listEntries: [
        { property: "tid", value: "10-22" },
        { property: "mat", value: "pizza" },
        { property: "öl", value: "frivilligt" },
      ],
      inputFormValue: "",
    };
  }

  handleChange() {
    let inputFormValue = document.getElementById("inputForm").value
    let currentState = this.state;
    this.setState(Object.assign({}, currentState, {
      inputFormValue: inputFormValue,
    }));
  }

  SaveToList() {
    const currentListEntries = this.state.listEntries;
    if (this.property.value !== "" && this.value.value !== "" && this.property.value && this.value.value && !currentListEntries.some(x => x.property === this.property.value)) {
      currentListEntries.push({ property: this.property.value, value: this.value.value });

      let currentState = this.state;
      this.setState(Object.assign({}, currentState, {
        listEntries: currentListEntries
      }));
      document.getElementById("listError").hidden = true;
    }
    else if (currentListEntries.some(x => x.property === this.property.value)) {
      document.getElementById("listError").innerText = "Same property already found";
      document.getElementById("listError").hidden = false;
    }
    else {
      document.getElementById("listError").innerText = "Value or property missing";
      document.getElementById("listError").hidden = false;
    }
  }
  render() {
    let hackathon = {
      color: 'Fuchsia',
      fontSize: '120%'
    };

    let inputStyle = {
      width: '20vw',
      marginTop: '5px',
      marginBottom: '5px',
    };
    let button = {
      fontSize: '15px',
      width: '20vw',
      backgroundColor: 'DarkOliveGreen',
    };
    let warning = {
      color: 'Red',
      fontSize: '18px'
    };

    return (
      <div>
        <h1>Välkommen Viktor Högberg,</h1>
        <h4>till denna upplaga av <span style={hackathon}>Hackaton!</span></h4>
        <input id="inputProperty" style={inputStyle} type="text" className="form form-control" placeholder="Property" ref={input => this.property = input} />
        <input id="inputValue" style={inputStyle} type="text" className="form form-control" placeholder="Value" ref={input => this.value = input} />
        <button id="saveListEntry" style={button} className="btn btn-success" onClick={() => this.SaveToList()}>Save</button>
        <GenerateList myList={this.state.listEntries} />
        <p id="listError" style={warning} hidden> Warning: Error fix </p>
        <p>Fria tester av JSX och React inom denna component...</p>
        <hr />
        <h4>Följ med på en oförglömglig resa till <span style={hackathon}>kodförståelse</span> med årets första <span style={hackathon}>hackaton</span></h4>
        <hr />
        <div>
          <input id="inputForm" type="text" className="inputText" style={inputStyle} onChange={() => this.handleChange()} required />
          <span className="floating-label">Message to teams</span>
        </div>
        <SendToTeamsButton myMessage={this.state.inputFormValue} />
        <hr />
        <Game />
        <hr />
        <img width="1000px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTX4HgyT3L9Ul8Dm1Jicsrg2ZO9uPHIxyuGXlTO5cXjps42UfYw" />
      </div>
    );
  }
}
