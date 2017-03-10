import React from 'react';
import FriendSearch from './FriendSearch'
import Popup from './../Shared/Modal.jsx'
import UserStats from './UserStats.jsx'
import OnlineIcon from './OnlineIcon.jsx'


class FriendView extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            friend: '',
            image: '',
            modalShow: false
        }
    }
    componentDidMount() {
        let context = this;
        socket.emit("getFriends", sessionStorage.getItem('user'));
        socket.on("friendData", function(data){
            console.log(data);
            context.setState({
                friends: data
            })
        });
    }
    getFriend(i, e) {
        let context = this;
        e.preventDefault();
        socket.emit("getFriendStatus", context.state.friends[i].friend);
        socket.on("receiveFriendStatus", function(data) {
            console.log(context.state.friends[i].friend  +" is " + data)
            context.setState({
                modalShow: true,
                friend: context.state.friends[i].friend,
                image: context.state.friends[i].image,
                online: data
            });
        });
    }
    modalClose() {
        this.setState({
            modalShow: false
        });
    }


    render () {
        return(
            <div className="FriendView">
                <div className="friendTable">
                    {this.state.friends.map((data, index) => {
                        console.log(data);
                        return (
                            <div>
                            <a href="" data-key={index} onClick={this.getFriend.bind(this, index)} className="friend">{data.friend}<OnlineIcon online={this.state.online}/></a>
                                <Popup show={this.state.modalShow} onHide={this.modalClose.bind(this)} content={<UserStats user={this.state.friend}/>}
                                title={<h1><img className="modalImage" src={this.state.image}/>{this.state.friend}</h1>} />
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
export default FriendView
