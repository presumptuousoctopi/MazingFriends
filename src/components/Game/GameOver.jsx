import React from 'react';
import { Link } from 'react-router'

class GameOver extends React.Component {
	constructor(props) {
		super(props)
	}

  quitGame() {
    document.getElementById("canvas").remove();
    location.reload();
    socket.emit("quit");
  }

  render() {
    return (
      <div className="GameOver">
      	<h1>Game Over!</h1> <br/>
      	<h2>Your time: {this.props.time}</h2> <br/>
      	<button className="homeButtons">Keep Playing</button> <br/>
      	<Link to='/'><button className="homeButtons" onClick={this.quitGame.bind(this)}>Quit</button></Link>
      </div>
    );
  }
}

export default GameOver;