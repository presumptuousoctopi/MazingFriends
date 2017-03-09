import React from 'react';
import {Link} from 'react-router';
import UserStats from './UserStats.jsx';
import FriendSearch from './FriendSearch.jsx';
import FriendView from './FriendView.jsx';
import ImageUpload from './ImageUpload.jsx';
import Image from './Image.jsx'
import Popup from './../Shared/Modal.jsx'
import { Glyphicon } from 'react-bootstrap'
import Title from '../TitleView.jsx'

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        imageUrl: './../placeholder.jpg',
        modalShow: false
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
    console.log('Logged out');
  }

  modalClose() {
    this.setState({
      modalShow: false
    });
  }

  modalOpen() {
    this.setState({
      modalShow: true
    });
  }

  render() {
    return (
      <div className="Profile">
      	<div className="profileHeader">
          <div className="headersLeft">
  	      	<Title/>
  	      	<h2>{this.props.currentUser}</h2> 
            <Link className="Link" to="/"><button onClick={this.logout} className="logoutButton">Logout</button></Link>
          </div>
          <div className="headersRight">
            <Image className="profilePic" imageUrl={this.state.imageUrl}/> <br/>
            <div className="edit" onClick={this.modalOpen.bind(this)} ><Glyphicon bsSize="large" glyph="pencil" className="clickable"/></div>
          </div>
      	</div>
        <div className="profileContent">
          <h1>{this.props.currentUser}'s Friends</h1>
          <FriendSearch/>
          <FriendView/>
          <h1>{this.props.currentUser}'s Stats</h1>
          <UserStats/>
          </div>
        <Popup show={this.state.modalShow} onHide={this.modalClose.bind(this)} content={<ImageUpload loadImage={this.imageStateChangeCallback} />} title="Upload Profile Pic" />
      </div>
    );
  }
}

export default Profile;