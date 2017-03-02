import React from 'react';
import Chat from './ChatView.jsx';
import GameOver from './GameOver.jsx'
import Controls from './Controls.jsx'
import ProgressBar from './ProgressBar.jsx'

class Game extends React.Component {
	constructor() {
		super()
		this.state = {
			gameover: false,
			time: null,
			timer: null,
			controls: false
		}
	} 

	componentDidMount() {
		var socket = window.socket;
		var context = this;
		
		socket.on('gameoverlisten', function(time) {
				context.setState({
					gameover: true,
					time: time,
					timer: null
				})
		console.log('gameover!')
			});

		socket.on('timer', function(timer) {
				context.setState({
					timer: timer
				})
			});
  }

  controlsClickHandler() {
  	this.setState({
  		controls: !this.state.controls
  	})
  }

  render() {
    return (
      <div className="Game">
		  <ProgressBar/>
      	<Chat timer={this.state.timer} time={this.state.time} controlsClickHandler={this.controlsClickHandler.bind(this)} />
      	{this.state.gameover ? <GameOver time={this.state.time}/> : ''}
      	{this.state.controls ? <Controls controlsClickHandler={this.controlsClickHandler.bind(this)} /> : ''}
      </div>
    );
  }
}

export default Game;