import React from 'react';
import TextChat from './TextChat.jsx'
import VideoChat from './VideoChat.jsx';

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      text: null
    }
  }

  switchChat(value) {
    this.setState({
      text: value
    })
    console.log(this.state.text)
  }

  render() {
    return (
      <div className="Chat">
        <div className="Options">
          <h1>Mazing Friends</h1>
          <form>
            <h3>Chat Options</h3>
            <input type="radio" name="chat" value="text" onChange={this.switchChat.bind(this, "text")}/>Text
            <input type="radio" name="chat" value="video" onChange={this.switchChat.bind(this, "video")}/>Video
          </form>
        </div>
        {this.state.text === "text" ? <TextChat/> : <VideoChat/>}
      </div>
    );
  }
};


export default Chat;