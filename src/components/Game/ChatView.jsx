import React from 'react';
import TextChat from './TextChat.jsx'

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      chat: "text"
    }
  }

  render() {
    return (
      <div className="Chat">
        <div className="Options">
          <h1>Mazing Friends</h1>
          <form>
            <h3>Chat Options</h3>
            <input type="radio" name="chat" value="text"/>Text
            <input type="radio" name="chat" value="video"/>Video
          </form>
        </div>
        {this.state.chat === "text" ? <TextChat/> : <VideoChat />}
      </div>
    );
  }
};


export default Chat;