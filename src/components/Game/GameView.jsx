import React from 'react';
import Chat from './ChatView.jsx';

class Game extends React.Component {
  render() {
    return (
      <div className="Game">
      	<Chat/>
      </div>
    );
  }
}

export default Game;