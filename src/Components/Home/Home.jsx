import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAthlete } from '../../Actions/index';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const anonProfile = 'https://d3nn82uaxijpm6.cloudfront.net/assets/avatar/athlete/large-63758b9942e3f074c3ecb84db07928ee.png';

class Home extends Component {
    componentWillMount() {
        if (this.props.athlete === null)
            this.props.fetchAthlete(this.props.token);
    }

    render() {
        let { athlete } = this.props;

        let profileStyle = {
            borderTopLeftRadius: '100%',
            borderTopRightRadius: '100%',
            borderBottomLeftRadius: '100%',
            borderBottomRightRadius: '100%',
        };

        if (athlete) {
            const profile = (athlete.profile === 'avatar/athlete/large.png') ? anonProfile : athlete.profile;

            return (
                <div>
                    <img className="profile" style={profileStyle} src={profile} alt="profile" />
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
    athlete: state.athlete
}), (dispatch) => ({
    fetchAthlete: (token) => (dispatch(fetchAthlete(token)))
}))(Home));