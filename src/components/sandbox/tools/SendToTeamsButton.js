import React from 'react';
import {sendMessageToTeams} from './SendToTeams';

export default class SendToTeamsButton extends React.Component {
    constructor(props) {
        super(props);
      }

    handleClick() {
<<<<<<< HEAD
        sendMessageToTeams(this.props.myMessage.value);
=======
        alert(`Sent this message ${this.props.myMessage}`);
        sendMessageToTeams(this.props.myMessage);
>>>>>>> 49f15fc782cbea74987ed0cef13d0f5e2f93dccb
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
