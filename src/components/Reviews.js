import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskBox from './TaskBox';

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
                            console.log('review : ', review);
                            return (
                                <li className="row" key={review.id}>
                                    <div className="col s6">
                                        <div>{review.username}</div>
                                        <div>{review.text}</div>
                                    </div>
                                    <div className="col s6">
                                        <TaskBox tasks={review.tasks}/>
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