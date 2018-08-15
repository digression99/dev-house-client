import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResultBox from './ResultBox';
import UserInfoForm from './UserInfoForm';
import Reviews from './Reviews';
import ReviewForm from './ReviewForm';
import {getPartnerName, getUsername, getAccessToken, getTasksByUsername} from "../selectors";

import * as actions from '../actions';

class TaskContainer extends Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await this.props.fetchTasks(this.props.accessToken);
    }

    render() {
        return (
            <div>
                <div className="section">

                    <div className="row">
                        <div className="col s6">
                            <ResultBox username={this.props.username} />
                        </div>
                        <div className="col s6">
                            {this.props.partnerName ?
                                <ResultBox username={this.props.partnerName} /> :
                                <div>
                                    <UserInfoForm />
                                    <div>Please enter partner name.</div>
                                </div>
                            }
                        </div>
                    </div>
                    <ReviewForm/>
                    <Reviews />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    username : getUsername(state),
    partnerName : getPartnerName(state),
    accessToken : getAccessToken(state)
});

export default connect(mapStateToProps, actions)(TaskContainer);





