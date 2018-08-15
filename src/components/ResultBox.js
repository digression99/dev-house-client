import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskBox from './TaskBox';
import { getTasksByUsername } from "../selectors";

class ResultBox extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log('in result box, props : ', this.props);
        return (
            <div>
                <h1>{this.props.username}</h1>
                <TaskBox tasks={this.props.tasks} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    tasks : getTasksByUsername(state, ownProps.username)
});

export default connect(mapStateToProps, null)(ResultBox);