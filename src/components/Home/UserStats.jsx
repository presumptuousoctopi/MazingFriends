import React from 'react';
import OnlineIcon from './OnlineIcon.jsx';

class UserStats extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      userStats: []
    }
  }
  componentDidMount() {
    let context = this;
    socket.emit("getUserStats", this.props.user);
    socket.on("userStats", function(data){
      console.log(data);
      context.setState({
        userStats: data
      })
    });
  }
  render() {
    return (
      <div className="UserStats">
        <table className="statsTable">
          <tr className="statsHeaders">
            <th>Rank</th>
            <th>Teammate</th>
            <th>Level</th>
            <th>Time</th>
          </tr>
          {this.state.userStats.map((userStatObj) => {
            console.log(userStatObj);
            return (
                <tr>
                <td>{userStatObj.id}</td>
                <td>{userStatObj.friend}</td>
                <td>{userStatObj.level}</td>
                <td>{userStatObj.time}</td>
                </tr>
              )
          })}
        </table>
      </div>

    );
  }
}

export default UserStats;