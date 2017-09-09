import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import { fetchToken } from '../../Actions/index';

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
        // redirect to athlete page
        const { token, athlete } = this.props;
        return (
            <div>
                <h1>{token}</h1>
                <h1>{athlete && athlete.firstname}</h1>
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

export default addUrlProps({ urlPropsQueryConfig })(connect(mapStateToProps, mapDispatchToProps)(Authorize));