import React from 'react';
import Profile from './ProfileView.jsx'
import Lobby from './LobbyView.jsx'

class Home extends React.Component {
	constructor() {
		super();
		this.state = {

		}
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
      <div className="Home">
      	<Profile currentUser={this.state.currentUser}/>
      	<Lobby currentUser={this.state.currentUser}/>
      </div>
    );
  }
}

export default Home;