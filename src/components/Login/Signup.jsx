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
    if (this.refs.password.value !== this.refs.confirmPassword.value) {
      alert("Please enter the same password");
      return;
    }
    window.socket.emit('signup', newUser);
    window.sessionStorage.setItem('user', this.refs.username.value);
    var data = window.sessionStorage.getItem('user');
    console.log(data);
  }

  render() {
    return (
  		<form className="loginForm" onSubmit={this.signUp.bind(this)}>
      	<label>Username: </label> 
      	<input ref="username" required="true" className="loginInput"/>
        <br/>
        <br/>
      	<label>Password: </label>
      	<input type="password" ref="password" required="true" className="loginInput"/>
        <br/>
        <br/>
        <label>Confirm Password: </label> 
        <input type="password" ref="confirmPassword" required="true" className="loginInput"/>
        <br/>
        <br/>
      	<button type="submit">Sign up</button>
      </form>
    );
  }
}

export default Signup