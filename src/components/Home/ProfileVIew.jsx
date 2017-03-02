import React from 'react';
import UserStats from './UserStats.jsx'

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
      	<UserStats />
      </div>
    );
  }
}

export default Profile;