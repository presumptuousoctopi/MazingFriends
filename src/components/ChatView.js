import React from 'react';

class VideoChat extends React.Component {
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
    this.state.socket.emit('sendMessage', this.state.message);
  }

  updateInput(e) {
    this.setState({message: e.target.value});
  }

  render() {
    return (
      <div className="Chat">
        <h1> Chat </h1>
        <form onSubmit={this.sendMessage.bind(this)}> 
          <input type="text" value={this.state.message} onChange={this.updateInput.bind(this)} />
          <input type="submit" value="Submit" />
        </form>
        <div id="chatBox">
          {this.state.messages.map( (messageObj) => (
            <div>
              <h3>{messageObj['userId']}</h3>
              <div>{messageObj.message}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};


export default Chat;