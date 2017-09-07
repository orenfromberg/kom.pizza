import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';

const urlPropsQueryConfig = {
    code: { type: UrlQueryParamTypes.string }
}
class Authenticate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: ''
        }
    }

    static propTypes = {
        code: PropTypes.string,
    }

    componentWillMount() {
        //dispatch action to fetch auth token?

        // use this.props.code to fetch the auth token
        fetch('https://www.strava.com/oauth/token', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: this.props.code,
                client_id: process.env.REACT_APP_CLIENT_ID,
                client_secret: process.env.REACT_APP_CLIENT_SECRET
            })
        })
        .then((response) => {
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                return response.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        })
        .then((json) => {
            this.setState({
                token: json.access_token
            });
        })
        .catch((err) => {
            console.log(err);
            return null;
        })
    }

    render() {
        // redirect to athlete page
        const { token } = this.state;

        return (
            <div>
                <h1>{token}</h1>
            </div>
        )
    }
}

export default addUrlProps({ urlPropsQueryConfig })(Authenticate);