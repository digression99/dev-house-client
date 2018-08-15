import React, { Component } from 'react';

import TaskBox from './TaskBox';

class ResultBox extends Component {

    constructor(props) {
        super();

        console.log('resultbox props : ', props);
    }

    render() {
        console.log('resultbox props in render : ', this.props);
        return (
            <div>
                <h1>{this.props.username}</h1>
                <TaskBox tasks={this.props.tasks} />
            </div>
        );
    }
}

export default ResultBox;