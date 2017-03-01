import React from 'react';
import { Link } from 'react-router'
import axios from 'axios'
import TextChat from './TextChat.jsx'
import VideoChat from './VideoChat.jsx';
import ProgressBar from './ProgressBar.jsx'

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      video: true
    }
    console.log(this.state.text)
  }

  switchChat() {
    this.setState({
      video: false
    })
    // if (value === 'video') {
    //   socket.emit('changedToVideo', '');
    // }
  }

  stopGame() {
    document.getElementById("canvas").remove();
    location.reload();
  }

  render() {
    return (
      <div className="Chat">
        <div className="Options">
          <h1>Mazing Friends</h1>
          {this.props.timer ? <h2>{this.props.timer}</h2> : <p>waiting for second player...</p>}
          <button className="optionButtons" onClick={this.props.controlsClickHandler}>Controls</button>
          <Link to="/"><button className="optionButtons" onClick={this.stopGame.bind(this)}>Quit Game</button></Link>
        </div>
        {this.state.video ? <VideoChat/> : '' }
          <form>
            <input type="radio" name="chat" value="video" onChange={this.switchChat.bind(this)}/>Video Off
          </form>
        <TextChat/>
      </div>
    );
  }
};


export default Chat;