import React from 'react';
import Profile from './ProfileVIew.jsx'
import Lobby from './LobbyView.jsx'

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null
		}
	}

	componentDidMount() {
		var context = this;
			context.setState({
				currentUser: window.sessionStorage.getItem('user')
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