import React from 'react'; 
import { Link } from 'react-router'

class Signup extends React.Component {
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
      Confirm Password:
      <input required="true"/>
      <br/>
      <br/>
    	<Link to="/home"><button>Sign up</button></Link>
    </form>
    );
  }
}

export default Signup