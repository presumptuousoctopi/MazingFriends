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
    render () {
        return(
            <div className="FriendView">
                <div className="friends">
                    {this.state.friends.map((data) => {
                        return (
                            <a href="#" className="friend">{data.friend}</a>
                        )
                    })}
                </div>
            </div>
        );
    }
}
export default FriendView
