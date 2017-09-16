import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClub } from '../../Actions/index';
import { withRouter } from 'react-router';
// import { Link } from 'react-router-dom';

class Club extends Component {
    componentWillMount() {
        const {
            clubs,
            match,
            fetchClub,
            token,
        } = this.props;

        const { clubId } = match.params;

        if (!clubs[clubId]) {
            fetchClub(token, clubId);
        }
    }

    render() {
        let { athlete, clubs, match } = this.props;

        let club = clubs[match.params.clubId];

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
    athlete: state.athletes[state.currentAthlete.id],
    clubs: state.clubs
}), (dispatch) => ({
    fetchClub: (token, clubId) => (dispatch(fetchClub(token, clubId)))
}))(Club));