import React from 'react';
import UserStats from './UserStats.jsx'
import FriendSearch from './FriendSearch.jsx'
import FriendView from './FriendView.jsx'


class Profile extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null
		};
	}

	componentDidMount() {
		var context = this;
		socket.on('currentUser', function(user) {
			context.setState({
				currentUser: user
			});
		});
	}

  render() {
    return (
      <div className="Profile">
      	<div className="profileHeader">
	      	<h1>Mazing Friends </h1>
	      	<h2>{this.state.currentUser}</h2>
      	</div>
     	  <FriendSearch/>
      	<UserStats />
        <FriendView/>
      </div>
    );
  }
}

export default Profile;