import React from 'react';
import Profile from './ProfileView.jsx'
import Lobby from './LobbyView.jsx'

class Home extends React.Component {
<<<<<<< HEAD
  render() {
    return (
      <div className="Home">
      	<Profile/>
      	<Lobby/>
=======
	constructor() {
		super()
		this.state = {
			view: 'Home',
			join: 'vanish',
			new: 'vanish',
      gameLevel: 2,
      createRoomName: '',
      joinRoomName: '',
      controlsView: false
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
    var roomInfo = {
      roomname: this.state.createRoomName,
      level: this.state.gameLevel
    };

    window.socket.emit('createRoom', roomInfo);
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

  controlsViewToggle() {
    this.setState({
      controlsView: !this.state.controlsView
    }) 
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
          <select onChange={this.handleChange} value={this.state.gameLevel}  name="gameLevel" required>
            <option value="1">Easy</option>
            <option value="2">Normal</option>
            <option value="3">Hard</option>
          </select>
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
          <button className="homeButtons" onClick={this.controlsViewToggle.bind(this)}>Controls</button>
          {this.state.controlsView ? <Controls close={this.controlsViewToggle.bind(this)}/> : ''}
      	</div>
		  <Lobby/>
>>>>>>> 425791ddeec9678389118278593d9341273784d9
      </div>
    );
  }
}

export default Home;