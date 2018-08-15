import React, { Component } from 'react';

class TaskBox extends Component {

    constructor(props) {
        super();

        this.props = props;
        console.log('props : ', props);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.tasks.map(task => <li>{task.taskName}</li>)}
                </ul>
            </div>
        );
    }
}

export default TaskBox;