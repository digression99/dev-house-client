import React, { Component } from 'react';
import {getUsername} from "../selectors";
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">Dev House</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                {
                                    this.props.username ? <a href="https://www.naver.com">Logout</a>
                                        : <a href="https://www.google.com">Login</a>
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
    username : getUsername(state)
});

export default connect(mapStateToProps, actions)(Header);