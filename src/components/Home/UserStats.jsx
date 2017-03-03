import React from 'react';

class UserStats extends React.Component {
  constructor () {
    super ()
    this.state = {
      userStats: []
    }
  }
  componentDidMount() {
    let context = this;
    socket.emit("getUserStats", sessionStorage.getItem('user'));
    socket.on("userStats", function(data){
      context.setState({
        userStats: data
      })
    });
  }
  render() {
    return (
      <div className="UserStats">
      	<h1>User Stats</h1>
        <table>
          <tr>
            <th>Played with</th>
            <th>Time</th>
            <th>Level</th>
          </tr>
          {this.state.userStats.map((userStatObj) => {
            return (
                <tr>
                <td>{userStatObj.friend}</td>
                <td>{userStatObj.time}</td>
                <td>{userStatObj.level}</td>
                </tr>
            )
          })}
        </table>
      </div>
    );
  }
}

export default UserStats;