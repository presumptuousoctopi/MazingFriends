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
                <div className="friendTable">
                    {this.state.friends.map((data) => {
                        return (
                            <p className="friend">{data.friend}</p>
                        )
                    })}
                </div>
            </div>
        );
    }
}
export default FriendView
