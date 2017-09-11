import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAthlete } from '../../Actions/index';
import { withRouter } from 'react-router';

class Home extends Component {
    componentWillMount() {
        if (this.props.athlete.firstname === undefined)
            this.props.fetchAthlete(this.props.token);
    }

    render() {
        let { athlete } = this.props;

        if (athlete.firstname) {
            return (
                <div>
                    <h1>Welcome, {athlete.firstname}.</h1>
                </div>
            );
        }

        return (
            <div />
        );
    }
};

export default withRouter(connect((state) => ({
    token: state.token,
    athlete: state.athlete
}), (dispatch) => ({
    fetchAthlete: (token) => (dispatch(fetchAthlete(token)))
}))(Home));