import React from 'react';
import FriendSearch from './FriendSearch'
import Popup from './../Shared/Modal.jsx'


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
        console.log(this.state.friends[i]);
        context.setState({
            modalShow: true,
            friend: this.state.friends[i].friend,
            image: this.state.friends[i].image
        });
        console.log(i);
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
                            <a href="" data-key={index} onClick={this.getFriend.bind(this, index)} className="friend">{data.friend}</a>
                                <Popup show={this.state.modalShow} onHide={this.modalClose.bind(this)} content={this.state.friend} title={<img className="modalImage" src={this.state.image}/>} />
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
export default FriendView
