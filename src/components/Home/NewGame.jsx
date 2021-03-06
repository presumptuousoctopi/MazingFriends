import React from 'react';
import Title from './../TitleView.jsx'
import { Link, browserHistory } from 'react-router'
import axios from 'axios'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
      createRoomName: '',
      joinRoomName: '',
      controlsView: false,
      gameLevel: 2,
      email: ""
        }
    this.createRoomButton = this.createRoomButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
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

	createRoomButton(e) {
    console.log('currentuser in props: ', this.props.currentUser)

     var roomInfo = {
       roomname: this.state.createRoomName,
       level: this.state.gameLevel,
       user: this.props.currentUser
     };
        if (!roomInfo.roomname || !roomInfo.level) {
            e.preventDefault();
        }
        else {
            window.socket.emit('createRoom', roomInfo);
        }
    console.log('room created: ', this.state.createRoomName)
	}

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value 
    })
    console.log(this.state);
  }
  changeEmail(e) {
      this.setState({
            email: e.target.value
      });
  }
  invite(e) {
      let context = this;
      e.preventDefault();
      socket.emit("invite", {user: sessionStorage.getItem('user'), email: context.state.email});
  }
  render() {
    return (
      <div className="NewGame">
        <h3>Create New Game</h3>
        <form className="NewGameForm">
          <label>Room Name: </label>
          <input onChange={this.handleChange} className="roomInput" name="createRoomName"></input> <br/>
          <label>Level Select: </label> 
           <select onChange={this.handleChange} value={this.state.gameLevel}  name="gameLevel" required>
             <option value="1">Easy</option>
             <option value="2">Normal</option>
             <option value="3">Hard</option>
           </select>
          <br/>
          <label>Send Invite: </label>
          <input type="text" className="inviteInput" onChange={this.changeEmail} placeholder="enter an email" /> <button type="submit" onClick={this.invite.bind(this)}>Send</button> <br/>
          <Link className="Link" to={"/game/" + this.state.createRoomName}><button className="newGameButton" onClick={this.createRoomButton}>Create Game</button></Link>

        </form>
      </div>
    );
  }
}

export default Home;
