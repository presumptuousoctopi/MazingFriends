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
    getFriend(i, e) {
        let context = this;
        e.preventDefault();
       console.log(context.state.friends);
        console.log(i);
    }
    render () {
        return(
            <div className="FriendView">
                <div className="friendTable">
                    {this.state.friends.map((data, index) => {
                        return (
                            <a href="" data-key={index} onClick={this.getFriend.bind(this, index)} className="friend">{data.friend}</a>
                        )
                    })}
                </div>
            </div>
        );
    }
}
export default FriendView
