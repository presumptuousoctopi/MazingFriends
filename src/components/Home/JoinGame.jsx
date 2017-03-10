import React from 'react';
import {Link} from 'react-router'

class Lobby extends React.Component {
    constructor() {
        super();
        this.state =  {
            rooms: {},
            roomNames: [],
            levels: {},
            users: {}
        }
     this.joinRoomButton = this.joinRoomButton.bind(this);
    }

    componentDidMount() {
        var context = this;
        console.log("component did mount in joinGame");
         socket.on("receiveRooms", function(data) {
              console.log("CURRENT DATA:", data);
            for (var key in data.rooms) {
                if (data.rooms[key] === 0) {
                    delete data.rooms[key];
                }
                //this might be hacky- check why the server is storing a null value
                if (data.rooms[key] === null) {
                    delete data.rooms[key];
                }
            }
            delete data.rooms[undefined]

            for(var key in data.levels) {
                if(data.levels[key] == 1) {
                    data.levels[key] = 'Easy';
                }
                if(data.levels[key] == 2) {
                    data.levels[key] = 'Normal';
                }
                if(data.levels[key] == 3) {
                    data.levels[key] = 'Hard';
                }
            }
            
            context.setState({
                rooms: data.rooms,
                roomNames: Object.keys(data.rooms),
                levels: data.levels,
                users: data.users
             })
         });
        socket.emit("getRoomInfo");
    }


    joinRoomButton(room) {
         window.socket.emit('joinRoom', room);
    }

    render() {
        return (
            <div className="TableContainer">
                <table className="LobbyTable">
                    <tbody>
                        <tr className="LobbyHeaders">
                            <td>Room</td>
                            <td>User</td>
                            <td>Level</td>
                            <td>Join</td>
                        </tr>
                        {this.state.roomNames.map((key) => {
                            console.log(key);
                        return (
                        <tr>
                            <td>{key}</td>
                            <td>{this.state.users[key]}</td>
                            <td>{this.state.levels[key]}</td>
                            {this.state.rooms[key] === 2 ? <td>Room Full</td> : 
                            <td><Link className="Link" to={"/game/" + key}>
                            <button className="joinButton" onClick={this.joinRoomButton.bind(null, key)}>Join Room</button>
                            </Link></td> }
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
