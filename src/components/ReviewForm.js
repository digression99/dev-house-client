import React, { Component } from 'react';
import { connect } from'react-redux';
import * as actions from '../actions';

class ReviewForm extends Component {

    constructor(props) {
        super(props);
        this.state = { reviewText : ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({reviewText : event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('event : ', event);
        // alert('submitted form text : ', event.target.value);
        console.log('submitted form text : ', event.target.review.value);
        this.setState({reviewText : ''});

        this.props.addReview(event.target.review.value, "kimilsik", [{
            username : "kimilsik",
            taskName : "blabla",
            comment : "comment",
            timestamp : 1000
        }]);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Today's review.
                <textarea value={this.state.reviewText} onChange={this.handleChange} name="review" id="review" cols="30" rows="10" />
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default connect(null, actions)(ReviewForm);


