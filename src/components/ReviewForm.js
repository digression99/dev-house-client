import React, { Component } from 'react';
import { connect } from'react-redux';
import * as actions from '../actions';
import {getTasksByUsername} from "../selectors";
import { toast } from 'react-toastify';

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

    async handleSubmit(e) {
        e.preventDefault();

        this.setState({reviewText : ''});
        try {
            await this.props.saveReview(this.props.username, e.target.review.value, this.props.tasks);
            toast('successfully saved your review!');
        } catch (e) {
            toast('failed to save your review...');
        }
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

const mapStateToProps = state => ({
    username : state.auth.username,
    tasks : getTasksByUsername(state, state.auth.username)
});

export default connect(mapStateToProps, actions)(ReviewForm);


