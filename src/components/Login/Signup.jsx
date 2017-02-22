import React from 'react'; 
import { Link, browserHistory } from 'react-router'

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      socket: socket
    };
  }

  componentDidMount() {
    var socket = window.socket;
    var context = this;
    socket.on('signupResponse', function(message) {
      if ( message ) {
        alert(message);      
      } else {
        browserHistory.push({ pathname: '/home'});
      }
    });

    this.setState({
      socket: socket
    });
  }

  signUp(e) {
    e.preventDefault();
    var newUser = {
      username: this.refs.username.value,
      password: this.refs.password.value
    };
    console.log('in signup', newUser);
    this.state.socket.emit('signup', newUser);
  }

  render() {
    return (
		<form onSubmit={this.signUp.bind(this)}>
    	Username:
    	<input ref="username" required="true" />
      <br/>
      <br/>
    	Password:
    	<input ref="password" required="true" />
      <br/>
      <br/>
      Confirm Password:
      <input required="true"/>
      <br/>
      <br/>
    	<button type="submit">Sign up</button>
    </form>
    );
  }
}

export default Signup