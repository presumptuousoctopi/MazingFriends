import React from 'react'

class Image extends React.Component{
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        socket.emit("getProfileImage", {user: sessionStorage.getItem('user')});
    }
    render () {
        return (
                <img className="profilePic" src={this.props.imageUrl} alt="Profile Image"></img>
        );
    }
}

export default Image