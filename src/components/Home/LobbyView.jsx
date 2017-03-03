import React from 'react';
import NewGame from './NewGame.jsx'
import JoinGame from './JoinGame.jsx'

class Lobby extends React.Component {
  render() {
    return (
      <div className="Lobby">
      	<NewGame currentUser={this.props.currentUser}/>
      	<JoinGame />
      </div>
    );
  }
}

export default Lobby;