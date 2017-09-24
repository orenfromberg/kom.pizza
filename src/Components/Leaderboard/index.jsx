import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchClub, fetchClubActivities } from '../../Actions';
import {
    getLeaderboard,
    Filters,
    Sorts
} from 'strava-leaderboard';
import './style.css';

class Leaderboard extends Component {
    componentWillMount() {
        const { 
            clubs,
            fetchClubActivities,
            fetchClub,
            token, 
            match, 
            activitiesByClub 
        } = this.props;

        const { clubId } = match.params;

        if (!clubs[clubId]) {
            fetchClub(token, clubId);
        }

        if (!activitiesByClub[clubId]) {
            fetchClubActivities(token, clubId);
        }
    }

    render() {
        const { 
            isFetchingActivities, 
            clubs,
            match, 
            activitiesByClub, 
            activities } = this.props;

        const { clubId } = match.params;

        const club = clubs[clubId];
        
        let leaderboard = null;
        if (activitiesByClub[clubId]) {

            let clubActivities = activitiesByClub[clubId].map((id) => activities[id]);

            leaderboard = getLeaderboard(
                clubActivities, 
                Filters.currentMonthlyDistanceOfType('Ride'),
                Sorts.sortByDistanceHighToLow);
            }

        return (
            <div>
                { 
                    isFetchingActivities && 
                    <h1>LOADING...</h1>
                }
                {
                    leaderboard && clubs && club &&
                    <div>
                        <img src={club.profile} alt="club profile"/>
                        <table>
                            <thead>
                                <tr>
                                    <td>Place</td>
                                    <td>Athlete</td>
                                    <td>Distance</td>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                leaderboard.map((entry, index) => (<tr key={entry.athlete.id}>
                                    <td>{`${index + 1}`}</td>
                                    <td><img className="profile-medium" src={entry.athlete.profile_medium} alt="profile medium" />{`${entry.athlete.firstname} ${entry.athlete.lastname}`}</td>
                                    <td>{entry.distance}</td>
                                    </tr>))
                            }
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        );

    }
};

export default withRouter(connect((state) => ({
    token: state.token,
    clubs: state.clubs,
    isFetchingActivities: state.isFetchingActivities,
    activitiesByClub: state.activitiesByClub,
    activities: state.activities
}), (dispatch) => ({
    fetchClub: (token, id) => dispatch(fetchClub(token, id)),
    fetchClubActivities: (token, id) => dispatch(fetchClubActivities(token, id))
}))(Leaderboard));