import React from 'react';
import {sendMessageToTeams} from './SendToTeams';

export default class SendToTeamsButton extends React.Component {
    constructor(props) {
        super(props);
      }

    handleClick() {
        console.log(this.props.myMessage);
        sendMessageToTeams(this.props.myMessage.value);
    }


    render() {
        let buttonStyle = {
            width: '300px',
            backgroundColor: 'red',
        };
        return (
            <button style={buttonStyle} className="btn btn-success" onClick={() => this.handleClick()}>Skriv till kanal "test_flow"</button>
        );
    }

}
