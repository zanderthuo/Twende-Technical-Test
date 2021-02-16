import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SingleRepo from './components/SingleRepo';
import RepoList from './components/RepoList';

import './App.css';

class App extends Component{
  render(){
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <RepoList />
            </Route>
            <Route path="/singleRepo/:id">
              <SingleRepo />
            </Route>
            <Route path="/favoriteRepo">
              <p>hello</p>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
