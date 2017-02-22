import React from 'react';
import Chat from './ChatView.jsx';
import Home from './HomeView.jsx'

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
