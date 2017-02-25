import React from 'react';
import Chat from './ChatView.jsx';
import GameOver from './GameOver.jsx'
import ProgressBar from './ProgressBar.jsx'

class Game extends React.Component {
	constructor() {
		super()
		this.state = {
			gameover: false,
			time: null,
			timer: null
		}
	} 

	componentDidMount() {
		var socket = window.socket;
		var context = this;
		
		socket.on('gameoverlisten', function(time) {
				context.setState({
					gameover: true,
					time: time
				})
		console.log('gameover!')
			});

		socket.on('timer', function(timer) {
				context.setState({
					timer: timer
				})
			});
  }

  render() {
    return (
      <div className="Game">
			{console.log(window.gameover)}
      	<Chat timer={this.state.timer} />
      	{this.state.gameover ? <GameOver time={this.state.time}/> : ''}
      </div>
    );
  }
}

export default Game;