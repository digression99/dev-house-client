import React, { Component } from 'react';

import Task from './Task';

class TaskBox extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="list-item-container">
                <ul className="collection">
                    {this.props.tasks.map(task =>
                        <li className="collection-item center-align" key={task.id}>
                            <Task {...task} />
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default TaskBox;