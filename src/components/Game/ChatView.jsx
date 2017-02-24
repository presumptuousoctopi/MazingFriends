import React from 'react';
import { Link } from 'react-router'
import axios from 'axios'
import TextChat from './TextChat.jsx'
import VideoChat from './VideoChat.jsx';

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "video"
    }
    console.log(this.state.text)
  }

  switchChat(value) {
    this.setState({
      text: value
    })

    //if state is video
    if(value === 'video') {
      socket.emit('switchToVideo', 'switchToVideo')
    //emit socket to server
    }

  }

  stopGame() {
    location.reload();
  }

  render() {
    return (
      <div className="Chat">
        <div className="Options">
          <h1>Mazing Friends</h1>
          <button className="optionButtons">Controls</button>
          <Link to="/"><button className="optionButtons" onClick={this.stopGame.bind(this)}>Quit Game</button></Link>
          <form>
            <h3>Chat Options</h3>
            <input type="radio" name="chat" value="text" onChange={this.switchChat.bind(this, "text")}/>Text
            <input type="radio" name="chat" value="video" onChange={this.switchChat.bind(this, "video")}/>Video
          </form>
        </div>
        {this.state.text === "video" ? <VideoChat/> : <TextChat/> }
      </div>
    );
  }
};


export default Chat;