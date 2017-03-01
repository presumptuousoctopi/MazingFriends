import React from 'react';
import FriendSearch from './FriendSearch.jsx'

class Lobby extends React.Component {
    constructor() {
        super();
        this.state =  {
            rooms: {},
            roomNames: []
        }
    }

    componentDidMount() {
        var context = this;
        console.log("component did mount");
        var context = this;
        socket.on("receive", function(data) {
            console.log("CURRENT DATA:", data);
            for (var key in data) {
                if (data[key] === 0) {
                    delete data[key];
                }
                //this might be hacky- check why the server is storing a null value
                if (data[key] === null) {
                    delete data[key];
                }
            }
            delete data[undefined];
            context.setState({
                rooms: data,
                roomNames: Object.keys(data)
            }, function (data) {

            })
            context.forceUpdate();
        })
        socket.emit("getRooms");
    }
    render() {
        return (
            <div>
                <FriendSearch/>
            <table>
                <tr>
                    <th>Roomname</th>
                    <th>Number of Players</th>
                </tr>
                {this.state.roomNames.map((key, index) => {
                    console.log(key);
                return (
                <tr>
                <td>{key}</td>
                <td>{this.state.rooms[key]}/2</td>
                </tr>
                )
            })}
            </table>
            </div>
        );
    }
}
export default Lobby
