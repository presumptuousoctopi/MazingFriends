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
  }

  updateInput(e) {
    e.preventDefault();
    this.setState({message: e.target.value});
  }

  onFocus() {
    // disabling 'wasd' for game movement
    window.camera.keysUp = [];
    window.camera.keysDown = []; 
    window.camera.keysLeft = []; 
    window.camera.keysRight = [];
    window.userOnChat = true;
    
  }

  onBlur() {
    // enabling 'wasd' for game movement
    camera.keysUp = [87];
    camera.keysDown = [83]; 
    camera.keysLeft = [65]; 
    camera.keysRight = [68];
    window.userOnChat = false;

  }

  render() {
    return (
      <div className="TextChat">
        <form onSubmit={this.sendMessage.bind(this)}> 
          <input type="text" value={this.state.message} onFocus={this.onFocus.bind(this)} onChange={this.updateInput.bind(this)} onBlur={this.onBlur.bind(this)} />
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


export default TextChat;