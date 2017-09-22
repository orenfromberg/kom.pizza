import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentAthlete } from '../../Actions';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const profileStyle = {
    borderRadius: '100%'
};

class Home extends Component {
    componentWillMount() {
        const {
            token,
            currentAthlete,
            fetchCurrentAthlete,
        } = this.props;

        if (!currentAthlete) {
            fetchCurrentAthlete(token);
        }
    }

    render() {
        const { currentAthlete } = this.props;

        if (currentAthlete && currentAthlete.clubs) {
            return (
                <div>
                    <img className="profile" style={profileStyle} src={currentAthlete.profile} alt="profile" />
                    <h2>Welcome, {currentAthlete.firstname}. Click on the club below for leaderboards.</h2>
                    {
                        currentAthlete.clubs.map((club) => {
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
    currentAthlete: state.currentAthlete,
}), (dispatch) => ({
    fetchCurrentAthlete: (token) => dispatch(fetchCurrentAthlete(token))
}))(Home));