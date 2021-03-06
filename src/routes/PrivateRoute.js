import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/login"/>
        )
    )}/>
);

const mapStateToProps = state => ({
    isAuthenticated: !!state.auth.accessToken
});

export default connect(mapStateToProps, null)(PrivateRoute);