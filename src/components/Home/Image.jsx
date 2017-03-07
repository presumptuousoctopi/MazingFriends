import React from 'react'

class Image extends React.Component{
    constructor(props) {
        super(props)
    }
    render () {
        return (
                <img className="profilePic" src={this.props.imageUrl} alt="Profile Image"></img>
        );
    }
}

export default Image