import React, { Component } from 'react';

class TaskBox extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="list-item-container">
                <ul className="collection">
                    {this.props.tasks.map(task =>
                        <li className="collection-item center-align" key={task.timestamp}>
                            <div>
                                <h1>{task.taskName}</h1>
                                <div>
                                    {task.comment}
                                </div>
                                <div>
                                    {task.timestamp}
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default TaskBox;