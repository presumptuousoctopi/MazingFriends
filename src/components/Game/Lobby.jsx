import React from 'react';


class Lobby extends React.Component {
    constructor() {
        super();
        this.state =  {
            rooms: {},
            roomNames: []
        }
    }

    componentDidMount() {
        console.log("component did mount");
        var context = this;
        socket.on("receive", function(data) {
            delete data[undefined];
            context.setState({
                rooms: data,
                roomNames: Object.keys(data)

            }, function (data) {

            })
        })
        socket.emit("getRooms");
    }

    render() {
        return (
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
        );
    }
}
export default Lobby
