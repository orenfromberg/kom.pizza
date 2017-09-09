import React, { Component } from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

import { Home, Authorize, Connect } from './Components';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token ? true : false;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/connect',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class App extends Component {
  render() {
    return (
      <div>
        <h1>kom.pizza</h1>
        <h1><span role="img" aria-label="kom.pizza">👑⛰️.🍕</span></h1>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/connect" component={Connect} />
        <Route path="/authorize" component={Authorize} />
      </div>
    );
  }
}

export default App;
