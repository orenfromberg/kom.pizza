import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClub } from '../../Actions';
import { withRouter } from 'react-router';
import { PrimaryButton } from '../index';

class Club extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        this.props.history.push(`/leaderboard/${this.props.match.params.clubId}`)
    }

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

        return (
            <div>
                {
                    currentAthlete && club && 
                    <div>
                        <img src={currentAthlete.profile_medium} alt="club profile"/>
                        <h2>{club.name}</h2>
                        <img src={club.profile} alt="club profile"/>
                        <PrimaryButton onClick={(e) => this.onClick(e)}text="View Leaderboard" />
                    </div>
                }
            </div>
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