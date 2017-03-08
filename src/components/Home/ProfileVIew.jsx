import React from 'react';
import {Link} from 'react-router';
import UserStats from './UserStats.jsx';
import FriendSearch from './FriendSearch.jsx';
import FriendView from './FriendView.jsx';
import ImageUpload from './ImageUpload.jsx';
import Image from './Image.jsx'


class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        imageUrl: ''
    }

    this.logout = this.logout.bind(this);
    this.imageStateChangeCallback = this.imageStateChangeCallback.bind(this);
  }
    imageStateChangeCallback(data) {
      this.setState({
        imageUrl: data
      });
      console.log(this.state.imageUrl);
    }
  logout() {
    window.sessionStorage.removeItem('user', this.props.currentUser);
    console.log('Logged out')
  }

  render() {
    return (
      <div className="Profile">
        <div className="profileHeader">
          <h1>Mazing Friends </h1>
          <h2>{this.props.currentUser}</h2>
            <Image imageUrl={this.state.imageUrl}/>
          <Link to="/"><button onClick={this.logout}>Logout</button></Link>
        </div>
        <div className="profileContent">
          <h1>{this.props.currentUser}'s Friends</h1>
          <FriendSearch/>
          <FriendView/>
          <h1>{this.props.currentUser}'s Stats</h1>
          <UserStats/>
        <ImageUpload loadImage={this.imageStateChangeCallback}/>
          </div>
      </div>
    );
  }
}

export default Profile;