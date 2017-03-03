import React from 'react';
import UserStats from './UserStats.jsx'
import FriendSearch from './FriendSearch.jsx'
import FriendView from './FriendView.jsx'


class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		};
	}

  render() {
    return (
      <div className="Profile">
      	<div className="profileHeader">
	      	<h1>Mazing Friends </h1>
	      	<h2>{this.props.currentUser}</h2>
      	</div>
     	  <FriendSearch/>
      	<UserStats />
        <FriendView/>
      </div>
    );
  }
}

export default Profile;