import React from 'react';

class TextChat extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
      messages: []
    };
  }

  componentDidMount() {
    var socket = window.socket;
    var context = this;
    socket.on('receiveMessage', function(message) {
      context.setState({
        messages: message
      });
      console.log('in receiveMessage : ', context.state);
    });

    this.setState({
      socket: socket
    });
  }
  
  sendMessage(e) {
    e.preventDefault();
    window.socket.emit('sendMessage', this.state.message);
    this.clearMessage()
  }

  updateInput(e) {
    this.setState({message: e.target.value});
  }

  clearMessage() {
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <div className="TextChat">
        <div className="ChatContainer">
          <div className="ChatBox">
            {this.state.messages.map( (messageObj) => (
              <div>
                <h3>{messageObj['userId']}</h3>
                <div>{messageObj.message}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="TextInput">
          <form onSubmit={this.sendMessage.bind(this)}> 
            <input type="text" className="chatBar" value={this.state.message} onChange={this.updateInput.bind(this)} />
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );
  }
};


export default TextChat;