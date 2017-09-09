import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import { fetchToken } from '../../Actions/index';
import { Redirect, withRouter } from 'react-router-dom';

const urlPropsQueryConfig = {
    code: { type: UrlQueryParamTypes.string }
}
class Authorize extends Component {
    static propTypes = {
        code: PropTypes.string,
    }

    componentWillMount() {
        this.props.fetchToken(this.props.code);
    }

    render() {
        const { token } = this.props;

        if (token) {
            localStorage.setItem('token', token);
            return (
                <Redirect to={{
                    pathname: '/',
                    state: { from: this.props.location }
                }} />
            );
        }

        return (
            <div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.token,
    athlete: state.athlete
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchToken }, dispatch);
}

export default addUrlProps({ urlPropsQueryConfig })(withRouter(connect(mapStateToProps, mapDispatchToProps)(Authorize)));