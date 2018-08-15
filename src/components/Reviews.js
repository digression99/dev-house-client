import React, { Component } from 'react';

import Task from './Task';


class Reviews extends Component {

    constructor(props) {
        super(props);

        this.state = {
            reviews : [
                {
                username : "kimilsik",
                text : "my day sucks",
                tasks : this.props.tasks
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <h1>Reviews.</h1>
                <ul className="collection">
                    {this.state.reviews.map(review => {
                        return (
                            <li>
                                <div>{review.username}</div>
                                <div>{review.text}</div>
                                <div>
                                    <ul className="collection">
                                        {review.tasks.map(task => <Task {...task} />)}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Reviews;