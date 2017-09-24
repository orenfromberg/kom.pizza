import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  withRouter,
  Link
} from 'react-router-dom';

import {
  Home,
  Authorize,
  Connect,
  PrivateRoute,
  Leaderboard,
  Club
} from './Components';

import './App.css';

class App extends Component {
  render() {

    const { token, isReady, isFetching } = this.props;

    return (isReady &&
      <div>
        <Link style={{textDecoration: 'none', color: 'black'}} to="/"><h1><span role="img" aria-label="kom.pizza">kom.pizza with your friendza!</span></h1></Link>
        {
          isFetching && 
          <div className="is-fetching"></div>
        }
        <PrivateRoute exact path="/" token={token} component={Home} />
        <PrivateRoute path="/club/:clubId" token={token} component={Club} />
        <PrivateRoute path="/leaderboard/:clubId" token={token} component={Leaderboard} />
        <Route path="/connect" component={Connect} />
        <Route path="/authorize" component={Authorize} />
      </div>
    );
  }
}

export default withRouter(connect((state) => ({
  token: state.token,
  isReady: state.isReady,
  isFetching: state.isFetching
}))(App));
