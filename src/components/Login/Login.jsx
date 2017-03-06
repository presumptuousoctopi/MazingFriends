import React from 'react'; 
import { Link, browserHistory } from 'react-router'

class Login extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    var socket = window.socket;
    var context = this;
    socket.on('signinResponse', function(obj) {
      if (window.sessionStorage.getItem('user')) {
        alert("Youre already logged in!");
      }
      if ( obj.message ) {
        alert(obj.message);
      } else {
        window.sessionStorage.setItem('user', obj.username);
        browserHistory.push({ pathname: '/home'});
      }
    });
    this.setState({
      socket: socket
    });
  }

  signIn(e) {
    e.preventDefault();
    var user = {
      username: this.refs.username.value,
      password: this.refs.password.value
    };
    console.log('attempt to sign in!');
    window.socket.emit('signin', user);
  }

  render() {
    return (
    	<form className="loginForm" onSubmit={this.signIn.bind(this)}>
      	Username: 
      	<input ref="username" required="true"/>
        <br/>
        <br/>
      	Password:
      	<input type="password" ref="password" required="true"/>
        <br/>
        <br/>
        <button type="submit">Log in</button>
      </form>
    );
  }
}

export default Login