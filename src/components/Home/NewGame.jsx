import React from 'react';
import Title from './../TitleView.jsx'
import { Link, browserHistory } from 'react-router'
import axios from 'axios'

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

	createRoomButton() {
    console.log('currentuser in props: ', this.props.currentUser)

     var roomInfo = {
       roomname: this.state.createRoomName,
       level: this.state.gameLevel,
       user: this.props.currentUser
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
          Room Name:<input onChange={this.handleChange} name="createRoomName"></input> <br/>
          Level:
           <select onChange={this.handleChange} value={this.state.gameLevel}  name="gameLevel" required>
             <option value="1">Easy</option>
             <option value="2">Normal</option>
             <option value="3">Hard</option>
           </select>
         <br/>
          Invite: <input type="text" onChange={this.changeEmail} placeholder="enter an email" /> <button type="submit" onClick={this.invite.bind(this)}>Send</button> <br/>
          <Link to="/game"><button className="newGameButton" onClick={this.createRoomButton}>Create Game</button></Link>
        </form>
      </div>
    );
  }
}

export default Home;
