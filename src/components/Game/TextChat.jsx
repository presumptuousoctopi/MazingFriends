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
    window.socket.emit('sendMessage', {
      message: this.state.message,
      user: sessionStorage.getItem('user')
    });
    this.clearMessage()
  }

  updateInput(e) {
    e.preventDefault();
    this.setState({message: e.target.value});
  }

  clearMessage() {
    this.setState({
      message: ''
    })
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
            <input type="text" className="chatBar" onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} value={this.state.message} onChange={this.updateInput.bind(this)} />
            <input type="submit" value="Submit" className="chatBtn" />
          </form>
        </div>
      </div>
    )
  }

}


export default TextChat;