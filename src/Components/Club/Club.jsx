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
        let { currentAthlete, clubs, match } = this.props;

        let club = clubs[match.params.clubId];

        if (currentAthlete && club) {
            return <div>
                <img src={currentAthlete.profile_medium} alt="club profile"/>
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
    currentAthlete: state.currentAthlete,
    clubs: state.clubs
}), (dispatch) => ({
    fetchClub: (token, clubId) => dispatch(fetchClub(token, clubId))
}))(Club));