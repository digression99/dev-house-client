import React, { Component } from 'react';

import TaskBox from './TaskBox';

class ResultBox extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <h1>{this.props.username}</h1>
                <TaskBox tasks={this.props.tasks} />
            </div>
        );
    }
}

export default ResultBox;