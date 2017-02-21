import React from 'react';
import Title from './TitleView.jsx'

class Home extends React.Component {
	constructor() {
		super()
		this.state = {
			view: 'Home',
			join: 'vanish',
			new: 'vanish'
		}
		this.playButtonClick = this.playButtonClick.bind(this)
		this.newButtonClick = this.newButtonClick.bind(this)
		this.joinButtonClick = this.joinButtonClick.bind(this)
	}

	playButtonClick() {
		this.setState({
			view: 'vanish'
		})
	}

	newButtonClick() {
		this.setState({
			new: 'NewView'
		})
	}

	joinButtonClick() {
		this.setState({
			join: 'JoinView'
		})
	}

  render() {
    return (
      <div className={this.state.view}>
      	<Title />
      	<div className="NewView">
	      	<button className="optionsButton" onClick={this.newButtonClick}>New Game</button>
	      	<div className={this.state.new}>
	      	Room Name:
	      	<input></input>
	      	<button className="Play" onClick={this.playButtonClick}>Create Room</button>
	      	<br/>
	      	<br/>
	      	</div>
      	</div>
      	<div className="JoinView">
	      	<button className="optionsButton" onClick={this.joinButtonClick}>Join Game</button>
	      	<div className={this.state.join}>
	      	Room Name:
	      	<input></input>
      		<button className="Play" onClick={this.playButtonClick}>Join Room</button>
      		<br/>
      		<br/>
	      	</div>
      	</div>
      </div>
    );
  }
}

export default Home;
