import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchClubActivities } from '../../Actions/index';

class Leaderboard extends Component {
    componentWillMount() {
        const { fetchClubActivities, token, match } = this.props;

        fetchClubActivities(token, match.params.clubId);
    }

    render() {
        const { isFetchingActivities } = this.props;
        
        return (
            <div>
                {isFetchingActivities && <h1>LOADING...</h1>}
            </div>
        );

    }
};

export default withRouter(connect((state) => ({
    token: state.token,
    isFetchingActivities: state.isFetchingActivities,
}), (dispatch) => ({
    fetchClubActivities: (token, id) => dispatch(fetchClubActivities(token, id))
}))(Leaderboard));