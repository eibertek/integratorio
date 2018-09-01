import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CardComponent from './Card/Component/CardComponent';
import CardFeature from './Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact />
            <Route path='/card' component={CardFeature} />
          </Switch>
        </BrowserRouter>      
      </div>
    );
  }
}

export default App;
