import React from 'react';

export default class ViktorH extends React.Component {



  handleClick()  {
    alert(`Sent this message ${this.fullName.value}`);
    
    this.sendMessageToTeams(this.fullName.value);

  }
  
  sendMessageToTeams(message) {
    fetch('https://prod-14.westeurope.logic.azure.com:443/workflows/eeac086bf369480bb644a346d2d0929b/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=XBEm3a46SLtbi37OVEimBCV1wt-qqJKSuoW-MpmHk5M', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message,
      })
    });
  }
  
  // handleChange(textValue) {
  //   console.log(textValue);
  //   this.setState({fullName: textValue})
  // }

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
    let buttonStyle = {
      width: '300px',
      backgroundColor: 'red', 
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
        <input id="inputForm" type="text" className="form form-control" style={inputStyle} ref={input => this.fullName = input} />
        <button style={buttonStyle} className="btn btn-success" onClick={() => this.handleClick()}>Skriv till kanal "test_flow"</button>
        <img width="1000px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTX4HgyT3L9Ul8Dm1Jicsrg2ZO9uPHIxyuGXlTO5cXjps42UfYw" />
      </div>
    );
  }
}
