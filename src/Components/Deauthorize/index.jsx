import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deauthorize } from '../../Actions';
import { withRouter } from 'react-router';
import Logo from './api_logo_pwrdBy_strava_horiz_light.svg';
import { PrimaryButton } from '../index';

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
                <PrimaryButton onClick={(e) => this.ClickHandler(e)} text="Deauthorize" />
                <img src={Logo} style={{
                    width: '200px',
                    display: 'block'
                }} alt="Powered by Strava" />
            </div>
        );
    }
}

export default withRouter(connect((state) => ({
    token: state.token
}), (dispatch) => ({
    deauthorize: (token) => (dispatch(deauthorize(token)))
}))(Deauthorize));