import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login';
import Homepage from './components/Homepage'
import NavBar from './components/NavBar'
import * as actions from './actions';

class App extends Component {
  render() {
    console.log(this.props.loggedIn);
    return (
      <div className="App">
        <NavBar />
        
        <Switch>
          <Route path="/login" component={Login} />
          {/*<Route path="/profile" component={Profile} />*/}
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id
});
export default connect(mapStateToProps, actions)(App);
