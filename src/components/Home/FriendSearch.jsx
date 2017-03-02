import React from 'react';


class FriendSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            friend: "",
            searchResult: ""
        };
        this.updateFriend = this.updateFriend.bind(this);
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

    }
    render() {
        let button = null;
        return (
            <div>
            <form>
                <input type="text" value={this.state.friend} onChange={this.updateFriend} placeholder="search for friends"></input>
                <button type="submit" onClick={this.searchForFriends.bind(this)}>Search</button>
            </form>
            <h4>{this.state.searchResult}</h4>
                {this.state.searchResult !== "" &&
                    <button onClick={this.addFriend}>Add</button>
                }
            </div>
        );
    }
}
export default FriendSearch