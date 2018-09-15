import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CardFeature from './Card';
import UserFeature from './Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/card' component={CardFeature} />
            <Route path='/' component={UserFeature} />
          </Switch>
        </BrowserRouter>      
      </div>
    );
  }
}

export default App;
