import React from 'react';
import Title from './../TitleView.jsx'
import { Link, browserHistory } from 'react-router'
import Lobby from './../Game/Lobby.jsx'

class Home extends React.Component {
	constructor() {
		super()
		this.state = {
			view: 'Home',
			join: 'vanish',
			new: 'vanish',
      createRoomName: '',
      joinRoomName: ''
		}
    this.createRoomButton = this.createRoomButton.bind(this);
    this.joinRoomButton = this.joinRoomButton.bind(this);
    this.newButtonClick = this.newButtonClick.bind(this);
    this.joinButtonClick = this.joinButtonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
	}

  componentDidMount() {
    var context = this;
    socket.on('roomJoinError', function(message) {
      browserHistory.push({
        pathname: '/home'
      });
      // context.setState({
      //   view: 'Home'
      // });
      alert(message);
    });
  }
	createRoomButton() {
    window.socket.emit('createRoom', this.state.createRoomName);
		this.setState({
			view: 'vanish'
		})
	}

  joinRoomButton() {
    window.socket.emit('joinRoom', this.state.joinRoomName);
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

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value 
    })
    console.log(this.state);
  }

  render() {
    return (
      <div className={this.state.view}>
      	<Title />
      	<div className="NewView">
	      	<button className="homeButtons" onClick={this.newButtonClick}>New Game</button>
	      	<div className={this.state.new}>
	      	Room Name:
	      	<input onChange={this.handleChange} name="createRoomName"></input>
	      	<Link to="/game"><button className="Play" onClick={this.createRoomButton}>Create Room</button></Link>
	      	<br/>
	      	<br/>
	      	</div>
      	</div>
      	<div className="JoinView">
	      	<button className="homeButtons" onClick={this.joinButtonClick}>Join Game</button>
	      	<div className={this.state.join}>
	      	Room Name:
	      	<input onChange={this.handleChange} name="joinRoomName"></input>
				<Link to="/game"><button className="Play" onClick={this.joinRoomButton}>Join Room</button></Link>
      		<br/>
      		<br/>
	      	</div>
          <br/>
          <button className="homeButtons">Controls</button>
      	</div>
		  <Lobby/>
      </div>
    );
  }
}

export default Home;
