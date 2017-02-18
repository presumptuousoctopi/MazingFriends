import React from 'react';
import Chat from './ChatView.js';
import Home from './HomeView.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
      	<Home />
      	<Chat />
      </div>
    );
  }
}

export default App;
