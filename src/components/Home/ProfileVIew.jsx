import React from 'react';
import UserStats from './UserStats.jsx'
import FriendSearch from './FriendSearch.jsx'


class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
     	  <FriendSearch/>
      	<UserStats />
      </div>
    );
  }
}

export default Profile;