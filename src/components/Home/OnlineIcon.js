import React from 'react';

class OnlineIcon extends React.Component {
  render() {
    return (
    	<div className="OnlineIcon">
    		<div className={this.props.online ? "online" : "offline"}></div>
    	</div>
    );
  }
}

export default OnlineIcon;