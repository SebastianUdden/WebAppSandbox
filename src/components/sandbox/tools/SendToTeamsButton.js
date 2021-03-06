import React from 'react';
import {sendMessageToTeams} from './SendToTeams';

export default class SendToTeamsButton extends React.Component {
    constructor(props) {
        super(props);
      }

    handleClick() {
        let messageText = this.props.myMessage;
        sendMessageToTeams(messageText);
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
