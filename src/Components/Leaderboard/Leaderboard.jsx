import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchClubActivities } from '../../Actions/index';

class Leaderboard extends Component {
    componentWillMount() {
        const { fetchClubActivities, token, match } = this.props;

        fetchClubActivities(token, match.params.clubId);

        // fetchClubActivitiesForCurrentWeek(token, match.param.clubId);
        // fetchClubActivitiesForCurrentMonth(token, match.param.clubId);
        // fetchClubActivitiesForCurrentYear(token, match.param.clubId);
    }

    render() {
        return (
            <div />
        );

    }
};

export default withRouter(connect((state) => ({
    token: state.token,
    // athlete: state.athletes[state.currentAthlete.id],
    // clubs: state.clubs
}), (dispatch) => ({
    // fetchClub: (token, clubId) => dispatch(fetchClub(token, clubId))
    fetchClubActivities: (token, id) => dispatch(fetchClubActivities(token, id))
}))(Leaderboard));