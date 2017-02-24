import React from 'react';
import Chat from './ChatView.jsx';
import GameOver from './GameOver.jsx'
import ProgressBar from './ProgressBar.jsx'

class Game extends React.Component {
  render() {
    return (
      <div className="Game">
      	<Chat/>
      	<GameOver/>
      </div>
    );
  }
}

export default Game;