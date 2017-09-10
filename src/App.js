import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  withRouter
} from 'react-router-dom';

import { Home, Authorize, Connect, PrivateRoute } from './Components';

class App extends Component {
  render() {
    if (!this.props.isReady)
      return <div />;

    return (
      <div>
        <h1>kom.pizza</h1>
        <h1><span role="img" aria-label="kom.pizza">👑⛰️.🍕</span></h1>
        <PrivateRoute exact path="/" token={this.props.token} component={Home} />
        <Route path="/connect" component={Connect} />
        <Route path="/authorize" component={Authorize} />
      </div>
    );
  }
}

export default withRouter(connect((state) => ({
  token: state.token,
  isReady: state.isReady
}), null)(App));
