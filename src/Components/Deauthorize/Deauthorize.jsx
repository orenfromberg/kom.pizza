import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deauthorize } from '../../Actions/index';
import {withRouter} from 'react-router';

class Deauthorize extends Component {
    constructor(props) {
        super(props);

        this.ClickHandler = this.ClickHandler.bind(this);
    }

    ClickHandler(e) {
        e.preventDefault();
        this.props.deauthorize(this.props.token);
    }

    render() {
        return (
            <button onClick={this.ClickHandler}>Deauthorize</button>        
        );
    }
}

// const Deauthorize = (props) => (
//     <button onClick={}>Deauthorize</button>
// )

export default withRouter(connect((state) => ({
    token: state.token
}), (dispatch) => ({
    deauthorize: (token) => (dispatch(deauthorize(token)))
}))(Deauthorize));