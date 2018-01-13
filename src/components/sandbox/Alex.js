import React from 'react';

export default class Alex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "Alex",
      hiddenLabel: true
    };
  }

  displayLabel() { 
    console.log("innanför displayLabel"); 
    if (document.getElementById("firstNameInput").value === ""){
      // document.getElementById("firstNameLabel").hidden = true;
      this.setState({
        count: 0,
        name: "Alex",
        hiddenLabel: true,
      });
    }
    else{
      console.log("innanför displayLabel -> else"); 
      // document.getElementById("firstNameLabel").hidden = false;
      this.setState({
        count: 0,
        name: "Alex",
        hiddenLabel: false,
      });
    }
  }


  handleClick() {
    alert(`Hej ${this._name.value}`);
    // alert(`Hej ${this.hej.type}`);
  }

  handleCount() {
    this.setState({
      count: this.state.count +1,
    });

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

    let buttonPlaceholder = {
      borderColor: "green",
      borderStyle: "solid",
      borderWidth: "0 0 3px 0",
      backgroundColor: "inherit",
      outline: "none",
      color: "#5B5B5B"
    };

    let styleLabel = {
      fontSize: "10px",
      marginBottom: "-5px",
      color: "#5B5B5B",
      visibility: this.state.hiddenLabel ? "hidden" : "visible",
      transition: "width 2s",
    };

    let inputStyle = {
      width: '20vw',
      marginTop: '5px',
      marginBottom: '5px',
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
        <input style={input} type="text" ref={input => this._name = input} className="form-control" />
        <button style={button} className="btn btn-success" onClick={() => this.handleClick()}>Click!</button>
        <button style={button} className="btn btn-info" onClick={() => this.handleCount()}>+1</button>
        <h2>{this.state.count}</h2>
        <h2>{this.state.name}</h2>
        <hr />
        <p id="firstNameGhostLabel" style={{...styleLabel, ...{display: "none"}}}>First name</p>
        <p id="firstNameLabel" style={styleLabel}>First name</p>
        <input id="firstNameInput" type="text" style={buttonPlaceholder} placeholder="First name" onChange={() => this.displayLabel()}/>  
        <hr/>
        <div>
        <input id="inputForm" type="text" className="inputText" style={{...inputStyle, ...buttonPlaceholder}} onChange={() => this.handleChange()} required />
        <span className="floating-label" style={{color:"#5B5B5B", left:"-20vw"}}>Message to teams</span>
      </div>
        <img width="1000px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTX4HgyT3L9Ul8Dm1Jicsrg2ZO9uPHIxyuGXlTO5cXjps42UfYw" />
      </div>
    );
  }
}
