import React from 'react';

class GameOver extends React.Component {
	constructor() {
		super()
	}

  render() {
    return (
      <div className="GameOver">
      	<h1>GameOver!</h1> <br/>
      	<h3>Your time: {}</h3> <br/>
      	<button className="homeButtons">Play Again</button> <br/>
      	<button className="homeButtons">Quit</button>
      </div>
    );
  }
}

export default GameOver;