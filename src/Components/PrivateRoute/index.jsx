import React from 'react';
import { Redirect, Route , withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Deauthorize } from '../index';

const PrivateRoute = (props) => {
    const { component: Component, ...rest } = props;

    const isAuthenticated = () => {
        return props.token ? true : false;
    }

    return (
        <Route {...rest} render={props => (
            isAuthenticated() ? (
                <div>
                    <Deauthorize />
                    <Component {...props} />
                </div>
            ) : (
                    <Redirect to={{
                        pathname: '/connect',
                        state: { from: props.location }
                    }} />
                )
        )} />
    );
}

export default withRouter(connect((state) => ({
    token: state.token
}), null)(PrivateRoute));
