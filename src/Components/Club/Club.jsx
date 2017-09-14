import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClub } from '../../Actions/index';
import { withRouter } from 'react-router';
// import { Link } from 'react-router-dom';

class Club extends Component {
    componentWillMount() {
        // fetch club
        this.props.fetchClub(this.props.token, this.props.match.params.clubId);
    }

    render() {
        let { club } = this.props;

        if (club) {
            return <div>
                <h2>{club.name}</h2>
                <img src={club.profile} alt="club profile"/>
            </div>;
        }

        return (
            <div />
        );

    }
};

export default withRouter(connect((state) => ({
    token: state.token,
    club: state.club,
}), (dispatch) => ({
    fetchClub: (token, clubId) => (dispatch(fetchClub(token, clubId)))
}))(Club));