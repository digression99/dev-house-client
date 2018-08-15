import React, { Component } from 'react';

import TaskContainer from '../TaskContainer';

class MainPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TaskContainer />
            </div>
        );
    }
}

export default MainPage;

