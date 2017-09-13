import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAthlete } from '../../Actions/index';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Club extends Component {
    componentWillMount() {
        // if (this.props.athlete === null)
        //     this.props.fetchAthlete(this.props.token);
    }

    render() {
        return <h1>This is the club page</h1>;
        // let { athlete } = this.props;

        // if (athlete) {
        //     return (
        //         <div>
        //             <img src={athlete.profile} alt="profile" />
        //             <h2>Welcome, {athlete.firstname}. Click on the club below for leaderboards.</h2>
        //             {
        //                 athlete.clubs.map((club) => {
        //                     return <Link to={`/club/${club.id}`}><img src={club.profile} alt={club.name} /></Link>
        //                 })
        //             }
        //         </div>
        //     );
        // }

        // return (
        //     <div />
        // );
    }
};

export default withRouter(connect((state) => ({
    token: state.token,
    // athlete: state.athlete
}), (dispatch) => ({
    // fetchAthlete: (token) => (dispatch(fetchAthlete(token)))
}))(Club));