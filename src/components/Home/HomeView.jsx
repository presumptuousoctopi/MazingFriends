import React from 'react';
import Profile from './ProfileView.jsx'
import Lobby from './LobbyView.jsx'

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
      	<Profile/>
      	<Lobby/>
      </div>
    );
  }
}

export default Home;