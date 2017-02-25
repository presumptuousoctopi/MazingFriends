import React from 'react';

class GameOver extends React.Component {
	constructor(props) {
		super(props)
	}

  render() {
    return (
      <div className="GameOver">
      	<h1>GameOver!</h1> <br/>
      	<h2>Your time: {this.props.time}</h2> <br/>
      	<button className="homeButtons">Play Again</button> <br/>
      	<button className="homeButtons">Quit</button>
      </div>
    );
  }
}

export default GameOver;