import React from 'react';
import {Link} from 'react-router'

class Lobby extends React.Component {
    constructor() {
        super();
        this.state =  {
            rooms: {},
            roomNames: []
        }
     this.joinRoomButton = this.joinRoomButton.bind(this);
    }

    componentDidMount() {
        var context = this;
        console.log("component did mount in joinGame");
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

    joinRoomButton(room) {
         window.socket.emit('joinRoom', room);
    }

    render() {
        return (
            <div className="TableContainer">
                <table className="LobbyTable">
                    <tbody>
                    <tr>
                        <td>Roomname</td>
                        <td>Capacity</td>
                        <td>Join</td>
                    </tr>
                    {this.state.roomNames.map((key, index) => {
                        console.log(key);
                    return (
                    <tr>
                    <td>{key}</td>
                    <td>{this.state.rooms[key]}/2</td>
                    <td>{this.state.rooms[key] === 2 ? <p>Room Full</p> : <Link to="/game"><button className="Play" onClick={this.joinRoomButton.bind(null, key)}>Join Room</button></Link> } </td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
        );
    }
}
export default Lobby
