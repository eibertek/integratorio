import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import CardComponent from './Component/CardComponent'; 
import CardUpload from './Component/CardUpload'; 


export default class index extends Component {
  render() {
    return (
       <Switch>
        <Route path='/card/upload' exact component={props => <CardUpload />} />
        <Route path='/card/:view' exact component={props => <CardComponent {...props} />} />
        <Route path='/card/' exact component={props => <CardComponent {...props} />} />
      </Switch>
    )
  }
}
