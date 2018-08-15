import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskBox from './TaskBox';
import { getTasksByUsername } from "../selectors";

class ResultBox extends Component {

    constructor(props) {
        super(props);
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

const mapStateToProps = (store, ownProps) => ({
    tasks : getTasksByUsername(store, ownProps.username)
});

export default connect(mapStateToProps, null)(ResultBox);