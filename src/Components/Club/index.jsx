import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClub, fetchClubMembers } from '../../Actions';
import { withRouter } from 'react-router';
import { PrimaryButton, RosterList } from '../';

class Club extends Component {
    constructor(props) {
        super(props);

        this.onClickViewLeaderboard = this.onClickViewLeaderboard.bind(this);
    }

    onClickViewLeaderboard(e) {
        e.preventDefault();
        this.props.history.push(`/leaderboard/${this.props.match.params.clubId}`)
    }

    componentWillMount() {
        const {
            clubs,
            match,
            fetchClub,
            fetchClubMembers,
            token,
            membersByClub
        } = this.props;

        const { clubId } = match.params;

        if (!clubs[clubId]) {
            fetchClub(token, clubId);
        }

        if (!membersByClub[clubId]) {
            fetchClubMembers(token, clubId);
        }
    }

    render() {
        let { 
            currentAthlete, 
            clubs, 
            membersByClub, 
            match, 
            athletes,
        } = this.props;

        let club = clubs[match.params.clubId];

        let roster = membersByClub[match.params.clubId] && membersByClub[match.params.clubId].map((id) => {
            return athletes[id];
        })

        return (
            <div>
                {
                    currentAthlete && club && 
                    <div>
                        <img src={currentAthlete.profile_medium} alt="club profile"/>
                        <h2>{club.name}</h2>
                        <img src={club.profile} alt="club profile"/>
                        <PrimaryButton onClick={(e) => this.onClickViewLeaderboard(e)}text="View Leaderboard" />
                        {
                            roster && <RosterList members={roster} />
                        }
                    </div>
                }
            </div>
        );

    }
};

export default withRouter(connect((state) => ({
    token: state.token,
    currentAthlete: state.currentAthlete,
    clubs: state.clubs,
    athletes: state.athletes,
    membersByClub: state.membersByClub,
}), (dispatch) => ({
    fetchClub: (token, clubId) => dispatch(fetchClub(token, clubId)),
    fetchClubMembers: (token, clubId) => dispatch(fetchClubMembers(token, clubId))
}))(Club));