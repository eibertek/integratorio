import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import CardComponent from './Component/CardComponent'; 

export default class index extends Component {
  render() {
    return (
        <Switch>
        <Route path='/' exact />
        <Route path='/hola/:view' exact component={props => <CardComponent {...props} />} />
        <Route path='/hola/upload' component={props => <div>HOLAAAA MUNDO</div>} />
      </Switch>
    )
  }
}
