import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../Actions/index';
import {withRouter} from 'react-router';

class Logout extends Component {
    constructor(props) {
        super(props);

        this.ClickHandler = this.ClickHandler.bind(this);
    }

    ClickHandler(e) {
        e.preventDefault();
        this.props.logout(this.props.token);
    }

    render() {
        return (
            <button onClick={this.ClickHandler}>Logout</button>        
        );
    }
}

// const Logout = (props) => (
//     <button onClick={}>Logout</button>
// )

export default withRouter(connect((state) => ({
    token: state.token
}), (dispatch) => ({
    logout: (token) => (dispatch(logout(token)))
}))(Logout));