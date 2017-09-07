import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';

import Home from './Components/Home/';
import Authenticate from './Components/Authenticate/';
// import MainPage from './MainPage';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Route exact path="/:word" component={MainPage} /> */}
        <Route exact path="/" render={() => <Home />}/>
        <Route exact path="/authenticate" component={Authenticate} /> 
      </div>
    );
  }
}

export default App;
