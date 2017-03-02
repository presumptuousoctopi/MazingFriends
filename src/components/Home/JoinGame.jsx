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
        socket.on("receiveRooms", function(data) {
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
            //context.forceUpdate();
        })
        socket.emit("getRooms");
    }
    render() {
        return (
<<<<<<< HEAD:src/components/Home/JoinGame.jsx
            <div className="TableContainer">
                <table className="LobbyTable">
                    <tr>
                        <td>Roomname</td>
                        <td>User</td>
                        <td>Capacity</td>
                        <td>Join</td>
                    </tr>
                    {this.state.roomNames.map((key, index) => {
                        console.log(key);
                    return (
                    <tr>
                    <td>{key}</td>
                    <td>{this.state.rooms[key]}/2</td>
                    <td>{this.state.rooms[key] === 2 ? <p>Room Full</p> : <button>Join Game</button>}</td>
                    </tr>
                    )
                })}
                </table>
=======
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
>>>>>>> 425791ddeec9678389118278593d9341273784d9:src/components/Game/Lobby.jsx
            </div>
        );
    }
}
export default Lobby
