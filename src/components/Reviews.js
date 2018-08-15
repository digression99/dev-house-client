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
                <ul className="collection">
                    {this.props.reviews.map(review => {
                        return (
                            <li>
                                <div>{review.username}</div>
                                <div>{review.text}</div>
                                <div>
                                    {/*<ul className="collection">*/}
                                        {/*{review.tasks.map(task => <Task {...task} />)}*/}
                                    {/*</ul>*/}
                                </div>
                            </li>
                        );
                    })}
                </ul>
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