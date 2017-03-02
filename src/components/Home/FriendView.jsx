import React from 'react';


class FriendView extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        };
    }
    componentDidMount() {
        let context = this;
        socket.emit("getFriends", sessionStorage.getItem('user'));
        socket.on("friendData", function(data){
            context.setState({
                friends: data
            })
        });
    }
    render (){
    }
}
export default FriendView
