import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from './Task';

class Reviews extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Reviews.</h1>
                <div className="section">
                    <ul className="collection">
                        {this.props.reviews.map(review => {
                            return (
                                <li className="row" key={parseInt(Math.random() * 10000)}>
                                    <div className="col s6">
                                        <div>{review.username}</div>
                                        <div>{review.text}</div>
                                    </div>
                                    <div className="col s6">
                                        <ul className="collection">
                                            {review.tasks.map(task => <li key={task.timestamp}>
                                                <Task {...task} />
                                            </li>)}
                                        </ul>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        reviews : state.reviews
    };
};

export default connect(mapStateToProps, null)(Reviews);