import React from 'react';
import Title from './../TitleView.jsx'
import { Link, browserHistory } from 'react-router'
import Controls from './../Game/Controls.jsx'

class Home extends React.Component {
	constructor() {
		super()
		this.state = {
			//view: 'Home',
      createRoomName: '',
      joinRoomName: '',
      controlsView: false
		}
    this.createRoomButton = this.createRoomButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
	}

  componentDidMount() {
    var context = this;
    socket.on('roomJoinError', function(message) {
      browserHistory.push({
        pathname: '/home'
      });
      alert(message);
    });
  }

	createRoomButton() {
     var roomInfo = {
       roomname: this.state.createRoomName,
       level: this.state.gameLevel
     };
 
     window.socket.emit('createRoom', roomInfo);
    console.log('room created: ', this.state.createRoomName)
	}

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value 
    })
    console.log(this.state);
  }

  render() {
    return (
      <div className="NewGame">
        <h3>Create New Game</h3>
        <form>
          Room Name:<input onChange={this.handleChange} name="createRoomName"></input> <br/>
          Level:
           <select onChange={this.handleChange} value={this.state.gameLevel}  name="gameLevel" required>
             <option value="1">Easy</option>
             <option value="2">Normal</option>
             <option value="3">Hard</option>
           </select>
         <br/>
          Invite <input type="text" placeholder="optional" /> <br/>
          <Link to="/game"><button className="Play" onClick={this.createRoomButton}>Create Game</button></Link>
        </form>
      </div>
    );
  }
}

/*
      <div classNameName={this.state.view}>
        <div className="NewView">
          <button className="homeButtons" onClick={this.newButtonClick}>New Game</button>
          <div className={this.state.new}>
          Room Name:
          <input onChange={this.handleChange} name="createRoomName"></input>
          <Link to="/game"><button className="Play" onClick={this.createRoomButton}>Create Room</button></Link>
          </div>
        </div>
        <div className="JoinView">
          <button className="homeButtons" onClick={this.joinButtonClick}>Join Game</button>
          <div className={this.state.join}>
          Room Name:
          <input onChange={this.handleChange} name="joinRoomName"></input>
        <Link to="/game"><button className="Play" onClick={this.joinRoomButton}>Join Room</button></Link>
          </div>
          <br/>
        </div>
      </div>
*/

export default Home;
