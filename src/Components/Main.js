import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import View from './View'
import Add from './Add'
import Remove from './Remove'

class Main extends Component {

  render() {
    return (
      <div>
        <Switch>
            {/* <Route exact path="/" render={() => <View projects={this.state.projects} />} /> */}
            <Route exact path="/" component={View}></Route>
            <Route path="/add" component={Add}></Route>
            <Route path="/remove" component={Remove}></Route>
        </Switch>
      </div>
    );
  }
}

export default Main;
