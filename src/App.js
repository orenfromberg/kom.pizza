import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';

import { Home, Authenticate } from './Components';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <Home />}/>
        <Route exact path="/authenticate" component={Authenticate} /> 
      </div>
    );
  }
}

export default App;
