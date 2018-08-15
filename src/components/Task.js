import React, { Component } from 'react';

class Task extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (<div>
            <div>
                <h3>{this.props.taskName}</h3>
                <div>
                    {this.props.comment}
                </div>
                <div>
                    {this.props.timestamp}
                </div>
            </div>
        </div>);
    }
}

export default Task;