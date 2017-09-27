import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Humanize from 'humanize-plus';
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
                Filters.currentMonthlyBikingDistance,
                Sorts.sortByDistanceHighToLow);
            }

        return (
            <div>
                {
                    leaderboard && clubs && club &&
                    <div>
                        <img src={club.profile} alt="club profile"/>
                        <table>
                            <thead>
                                <tr>
                                    <td>Place</td>
                                    <td>Athlete</td>
                                    <td>Distance (mi)</td>
                                    <td>Total Elevation Gain (ft)</td>
                                    <td>Elevation per Mile (ft/mi)</td>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                leaderboard.map((entry, index) => {
                                    return (
                                        <tr key={entry.athlete.id}>
                                            <td>{`${index + 1}`}</td>
                                            <td>
                                                <a target="_blank" href={`https://www.strava.com/athletes/${entry.athlete.id}`}>
                                                    <img className="profile-medium" src={entry.athlete.profile_medium} alt="profile medium" />{`${entry.athlete.firstname} ${entry.athlete.lastname}`}
                                                </a>
                                            </td>
                                            <td>{Humanize.formatNumber(entry.distanceInMiles, 2)}</td>
                                            <td>{Humanize.formatNumber(entry.elevationInFeet, 2)}</td>
                                            <td>{Humanize.formatNumber(entry.elevationOverDistance, 2)}</td>
                                        </tr>
                                    )
                                })
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
    activitiesByClub: state.activitiesByClub,
    activities: state.activities
}), (dispatch) => ({
    fetchClub: (token, id) => dispatch(fetchClub(token, id)),
    fetchClubActivities: (token, id) => dispatch(fetchClubActivities(token, id))
}))(Leaderboard));