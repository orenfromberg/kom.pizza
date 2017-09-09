import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';

import { Home, Authorize } from './Components';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <Home />}/>
        <Route exact path="/authorize" component={Authorize} /> 
      </div>
    );
  }
}

export default App;
