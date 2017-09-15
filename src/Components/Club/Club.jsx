import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClub } from '../../Actions/index';
import { withRouter } from 'react-router';
// import { Link } from 'react-router-dom';

class Club extends Component {
    componentWillMount() {
        if (!this.props.clubs[this.props.match.params.clubId]) {
            this.props.fetchClub(this.props.token, this.props.match.params.clubId);
        }
    }

    render() {
        let { athlete, clubs } = this.props;

        let club = clubs[this.props.match.params.clubId];

        if (athlete && club) {
            return <div>
                <img src={athlete.profile_medium} alt="club profile"/>
                <h2>{club.name}</h2>
                <img src={club.profile} alt="club profile"/>
            </div>;
        }

        return (
            <div />
        );

    }
};

export default withRouter(connect((state) => ({
    token: state.token,
    athlete: state.athlete,
    clubs: state.clubs
}), (dispatch) => ({
    fetchClub: (token, clubId) => (dispatch(fetchClub(token, clubId)))
}))(Club));