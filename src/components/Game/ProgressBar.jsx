import React from 'react'

class ProgressBar extends React.Component {
    constructor () {
        super()
        this.state = {
            percentage: 0
        };
    }
    componentDidMount() {
        var context = this;
        socket.on('receiveDistancePercentage', function(percentage) {
          // console.log('New percentage : ', percentage);
          // window.distancePercentage = percentage;
            context.setState({
                percentage: percentage
            });
        });

        // setInterval( () => {
        //     this.setState({
        //         percentage: window.distancePercentage
        //     });
        // }, 1500);
    }
    render () {
        return (
        <div className="progress">
            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={this.state.percentage}
                 aria-valuemin="0" aria-valuemax="100" style={{width:this.state.percentage+'%'}}>
                <span className="sr-only"></span>
            </div>
        </div>
        );
    }
}

export default ProgressBar;