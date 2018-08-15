import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResultBox from './ResultBox';
import UserInfoForm from './UserInfoForm';
import Reviews from './Reviews';
import ReviewForm from './ReviewForm';
import {getPartnerName, getUsername} from "../selectors";

class TaskContainer extends Component {

    render() {
        return (
            <div>
                <div className="section">
                    <div className="row">
                        <div className="col s6">
                            {this.props.username ?
                                <ResultBox username={this.props.username} /> :
                                <div>Please login.</div>
                            }
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
    partnerName : getPartnerName(state)
});

export default connect(mapStateToProps, null)(TaskContainer);





