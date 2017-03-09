import React from 'react';
import FriendSearch from './FriendSearch'

class FriendView extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
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
    getFriend(e) {
        e.preventDefault();
       console.log(e.target.innerHTML);
        // send data to back end and get this users data;
    }
    render () {
        return(
            <div className="FriendView">
                <div className="friendTable">
                    {this.state.friends.map((data, index) => {
                        return (
                            <a href="" onClick={this.getFriend} className="friend">{data.friend}</a>
                        )
                    })}
                </div>
            </div>
        );
    }
}
export default FriendView
