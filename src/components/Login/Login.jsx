import React from 'react'; 
import { Link } from 'react-router'

class Login extends React.Component {
  render() {
    return (
		<form>
    	Username:
    	<input required="true"/>
      <br/>
      <br/>
    	Password:
    	<input required="true"/>
      <br/>
      <br/>
    	<Link to="/home"><button>Log in</button></Link>
    </form>
    );
  }
}

export default Login