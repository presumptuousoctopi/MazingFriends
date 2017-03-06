import React from 'react';


class FriendSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            friend: "",
            searchResult: ""
        };
        this.updateFriend = this.updateFriend.bind(this);
        this.addFriend = this.addFriend.bind(this);
    }
    componentWillMount() {
    }
    componentDidMount() {
        let context = this;
        socket.on("alreadyAdded", function(){
            alert("That user is already in your friend database");
        });

    }
    searchForFriends(event) {
        var context = this;
        event.preventDefault();
        socket.emit("getUsers", this.state.friend);
        socket.on("users", function(obj){
            if (obj.data.username) {
                context.setState({
                    searchResult: obj.data.username
                })
            }
            else {
                alert("no such user in the database");
            }
        });
    }
    updateFriend(event){
        this.setState({
            friend: event.target.value
        })
    }
    addFriend () {
        console.log("adding friend:", this.state.friend);
        socket.emit("addFriend", {user: sessionStorage.getItem('user'), friend: this.state.searchResult});
        this.setState({
            searchResult: ""
        });
    }
    render() {
        let button = null;
        let context = this;
        return (
            <div className="FriendSearch">
            <form>
                <input type="text" value={this.state.friend} onChange={this.updateFriend} placeholder="search for friends"></input>
                <button type="submit" onClick={this.searchForFriends.bind(this)}>Search</button>
            </form>
            <h4>{this.state.searchResult}</h4>
                {this.state.searchResult !== "" &&
                    <button onClick={context.addFriend}>Add</button>
                }
            </div>
        );
    }
}
export default FriendSearch