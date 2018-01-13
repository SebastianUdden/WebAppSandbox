import React from 'react';
import SendToTeamsButton from './tools/SendToTeamsButton';
import GenerateList from './tools/List';


export default class ViktorH extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listEntries: [
        { property: "tid", value: "10-22" },
        { property: "mat", value: "pizza" },
        { property: "öl", value: "frivilligt" },
      ]
    };
  }

  SaveToList() {
    const currentListEntries = this.state.listEntries;
    if (this.property.value !== "" && this.value.value !== "" && this.property.value && this.value.value && !currentListEntries.some(x => x.property === this.property.value)) {
      currentListEntries.push({ property: this.property.value, value: this.value.value });
      console.log(currentListEntries);
      this.setState({
        listEntries: currentListEntries
      });
      document.getElementById("listError").hidden = true
    }
    else if(currentListEntries.some(x => x.property === this.property.value)) {
      document.getElementById("listError").innerText = "Same property already found"
      document.getElementById("listError").hidden = false
    }
    else {
      document.getElementById("listError").innerText = "Value or property missing"
      document.getElementById("listError").hidden = false
    }

  }
  render() {
    let hackathon = {
      color: 'OrangeRed',
      fontSize: '130%'
    };

    let info = {
      time: '10-22',
      food: 'Pizza',
      beer: 'Frivilligt',
    };

    let inputStyle = {
      width: '300px',
      marginTop: '5px',
      marginBottom: '5px',
    };
    let button = {
      width: '20vw',
      backgroundColor: 'blue',
    };
    let warning = {
      color: 'Red',
      fontSize: '18px'
    };

    return (
      <div>
        <h1>Välkommen Viktor Högberg,</h1>
        <h4>till denna upplaga av <span style={hackathon}>Hackaton!</span></h4>
        <input id="inputProperty" type="text" className="form form-control" style={inputStyle} placeholder="Property" ref={input => this.property = input} />
        <input id="inputValue" type="text" className="form form-control" style={inputStyle} placeholder="Value" ref={input => this.value = input} />
        <button id="saveListEntry" style={button} className="btn btn-success" onClick={() => this.SaveToList()}>Save</button>
        <GenerateList myList={this.state.listEntries} />
        <p id = "listError" style={warning} hidden> Warning: Error fix </p>
      <p>Fria tester av JSX och React inom denna component...</p>
      <hr />
      <h4>Följ med på en oförglömglig resa till <span style={hackathon}>kodförståelse</span> med årets första <span style={hackathon}>hackaton</span></h4>
      <input id="inputForm" type="text" className="form form-control" style={inputStyle} ref={input => this.message = input} />
      <img width="1000px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTX4HgyT3L9Ul8Dm1Jicsrg2ZO9uPHIxyuGXlTO5cXjps42UfYw" />
      </div >
    );
  }
}
// <SendToTeamsButton myMessage={this.message.value}/>
