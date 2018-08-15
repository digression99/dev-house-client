import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link, NavLink, withRouter } from 'react-router-dom';

import {getUsername} from "../selectors";
import * as actions from '../actions';

class Header extends Component {

    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.unsetUser();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">Dev House</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                {
                                    this.props.isAuthenticated ?

                                        <button onClick={this.handleLogout}>Logout</button> :
                                        <NavLink to="/login">Login</NavLink>
                                }
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated : !!state.auth.username
});

export default compose(
    connect(mapStateToProps, actions),
)(withRouter(Header));
// export default connect(mapStateToProps, actions)(Header);