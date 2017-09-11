import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deauthorize } from '../../Actions/index';
import {withRouter} from 'react-router';
import Logo from './api_logo_pwrdBy_strava_horiz_light.svg';

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
            <div>
                <img src={Logo} style={{
                    width: '200px',
                    display: 'block'
                }} alt="Powered by Strava" />
                <button style={{
                    backgroundColor: "#fc4d03",
                    border: 'none',
                    outline: 'none',
                    padding: '10px',
                    color: '#fff',
                    fontWeight: 'bold',
                    margin: '10px'
                }} onClick={this.ClickHandler}>Deauthorize</button>
            </div>
        );
    }
}

export default withRouter(connect((state) => ({
    token: state.token
}), (dispatch) => ({
    deauthorize: (token) => (dispatch(deauthorize(token)))
}))(Deauthorize));