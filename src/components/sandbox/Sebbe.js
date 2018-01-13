import React from 'react';
// import SendToTeamsButton from './tools/SendToTeamsButton';
import GenerateList from './tools/List';

export default class Sebbe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      listEntries: [
        { property: "tid", value: "10-22" },
        { property: "mat", value: "pizza" },
        { property: "öl", value: "frivilligt" },
      ]
    };
  }

  handleChangeStart = () => {
    console.log('Change event started');
  };

  handleChange = value => {
    this.setState({
      value: value,
      listEntries: [
        { property: "tid", value: "10-22" },
        { property: "mat", value: "pizza" },
        { property: "öl", value: "frivilligt" },
      ]
    });
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };

  SaveToList() {
    const currentListEntries = this.state.listEntries;
    if (this.property.value !== "" && this.value.value !== "" && this.property.value && this.value.value && !currentListEntries.some(x => x.property === this.property.value)) {
      currentListEntries.push({ property: this.property.value, value: this.value.value });
      this.setState({
        listEntries: currentListEntries
      });
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

  SliderInput () {
    document.getElementById("demo").innerHTML = document.getElementById("myRange").value;
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
    let size = {
      fontSize: '25px',
      width: '100px',
      marginRight: '5px',
      backgroundColor: 'Green',
      padding: '5px',
      borderRadius: '5px'
    };

    return (
      <div>
        <h1>Välkommen Sebbe,</h1>
        <h4>till denna upplaga av <span style={hackathon}>Hackaton!</span></h4>
        <input id="inputProperty" style={inputStyle} type="text" className="form form-control" placeholder="Property" ref={input => this.property = input} />
        <input id="inputValue" style={inputStyle} type="text" className="form form-control" placeholder="Value" ref={input => this.value = input} />
        <button id="saveListEntry" style={button} className="btn btn-success" onClick={() => this.SaveToList()}>Save</button>
        <GenerateList myList={this.state.listEntries} />
        <p id="listError" style={warning} hidden> Warning: Error fix </p>
        <p>Fria tester av JSX och React inom denna component...</p>
        <hr />
        <h4>Följ med på en oförglömglig resa till <span style={hackathon}>kodförståelse</span> med årets första <span style={hackathon}>hackaton</span></h4>
        <button style={size} onClick={() => this.handleChange(this.state.value + 10)}>+10</button>
        <button style={size} onClick={() => this.handleChange(this.state.value + 100)}>+100</button>
        <button style={size} onClick={() => this.handleChange(this.state.value - 10)}>-10</button>
        <button style={size} onClick={() => this.handleChange(this.state.value - 100)}>-100</button>
        <h2>{this.state.value}</h2>
        <img width={this.state.value} src="https://cdn.pixabay.com/photo/2016/08/17/22/22/pow-1601674_960_720.png" />
      </div>
    );
  }
}
