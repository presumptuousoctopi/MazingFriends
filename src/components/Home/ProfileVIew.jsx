import React from 'react';
import UserStats from './UserStats.jsx'
import FriendSearch from './FriendSearch.jsx'
import FriendView from './FriendView.jsx'


class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
     	  <FriendSearch/>
      	<UserStats />
        <FriendView/>
      </div>
    );
  }
}

export default Profile;