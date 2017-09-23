import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchClubActivities } from '../../Actions';
import {
    getLeaderboard,
    Filters,
    Sorts
} from 'strava-leaderboard';

class Leaderboard extends Component {
    componentWillMount() {
        const { fetchClubActivities, token, match, activitiesByClub } = this.props;

        const { clubId } = match.params;

        if (!activitiesByClub[clubId]) {
            fetchClubActivities(token, clubId);
        }
    }

    render() {
        const { isFetchingActivities, match, activitiesByClub, activities } = this.props;

        const { clubId } = match.params;
        
        let leaderboard = null;
        if (activitiesByClub[clubId]) {

            let clubActivities = activitiesByClub[clubId].map((id) => activities[id]);

            leaderboard = getLeaderboard(
                clubActivities, 
                Filters.currentMonthlyDistanceOfType('Ride'),
                Sorts.sortByKudosCountHighToLow);
            }

        return (
            <div>
                {isFetchingActivities && <h1>LOADING...</h1>}
                {leaderboard && <ul>
                    {
                        leaderboard.map((entry) => (<li key={entry.athlete.id}>{entry.athlete.firstname}</li>))
                    }
                    </ul>
                }
            </div>
        );

    }
};

export default withRouter(connect((state) => ({
    token: state.token,
    isFetchingActivities: state.isFetchingActivities,
    activitiesByClub: state.activitiesByClub,
    activities: state.activities
}), (dispatch) => ({
    fetchClubActivities: (token, id) => dispatch(fetchClubActivities(token, id))
}))(Leaderboard));