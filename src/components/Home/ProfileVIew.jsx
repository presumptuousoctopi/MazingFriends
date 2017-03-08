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
        imageUrl: './../placeholder.jpg'
    }

    this.logout = this.logout.bind(this);
    this.imageStateChangeCallback = this.imageStateChangeCallback.bind(this);
	}
    componentDidMount() {
        let context = this;
        socket.on("setProfileImage", function(data){
            context.setState({
                imageUrl: data
            })
        });
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
          <div className="headersLeft">
  	      	<h1>Mazing Friends </h1>
  	      	<h2>{this.props.currentUser}</h2> 
            <Link className="Link" to="/"><button onClick={this.logout} className="logoutButton">Logout</button></Link>
          </div>
          <div className="headersRight">
            <Image className="profilePic" imageUrl={this.state.imageUrl}/>
          </div>
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