import React from 'react';
import {Link} from 'react-router';
import UserStats from './UserStats.jsx';
import FriendSearch from './FriendSearch.jsx';
import FriendView from './FriendView.jsx';


class Profile extends React.Component {
	constructor(props) {
		super(props);

    this.logout = this.logout.bind(this);
	}

  logout() {
    window.sessionStorage.removeItem('user', this.props.currentUser);
    console.log('Logged out')
  }

  render() {
    return (
      <div className="Profile">
      	<div className="profileHeader">
	      	<h1>Mazing Friends </h1>
	      	<h2>{this.props.currentUser}</h2> 
          <Link to="/"><button onClick={this.logout} className="logoutButton">Logout</button></Link>
      	</div>
        <div className="profileContent">
          <h1>{this.props.currentUser}'s Friends</h1>
          <FriendSearch/>
          <FriendView/>
          <h1>{this.props.currentUser}'s Stats</h1>
        	<UserStats/>
          </div>
      </div>
    );
  }
}

export default Profile;