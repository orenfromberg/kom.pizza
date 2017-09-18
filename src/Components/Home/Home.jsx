import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAthlete } from '../../Actions/index';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const profileStyle = {
    borderTopLeftRadius: '100%',
    borderTopRightRadius: '100%',
    borderBottomLeftRadius: '100%',
    borderBottomRightRadius: '100%',
};

class Home extends Component {
    componentWillMount() {
        const {
            athlete,
            token,
            currentAthleteId,
            fetchAthlete
        } = this.props;

        if (!athlete) {
            fetchAthlete(token, currentAthleteId);
        }
    }

    render() {
        const { athlete } = this.props;

        if (athlete) {
            return (
                <div>
                    <img className="profile" style={profileStyle} src={athlete.profile} alt="profile" />
                    <h2>Welcome, {athlete.firstname}. Click on the club below for leaderboards.</h2>
                    {
                        athlete.clubs.map((club) => {
                            return <Link to={`/club/${club.id}`} key={club.id}><img src={club.profile_medium} alt={club.name} /></Link>
                        })
                    }
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
    athlete: state.athletes[state.currentAthlete.id],
    currentAthleteId: state.currentAthlete.id
}), (dispatch) => ({
    fetchAthlete: (token, id) => dispatch(fetchAthlete(token, id))
}))(Home));