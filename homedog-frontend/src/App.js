import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/forms/Login';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import VerticalNavBar from './components/VerticalNavBar'
import Footer from './components/Footer'
import Signup from './components/forms/Signup';
import FindSitter from './components/forms/FindSitter';
import MyHostPage from './components/MyHostPage';
import MyDogPage from './components/MyDogPage'
import * as actions from './actions';

class App extends Component {

  render() {
    console.log("app page", this.props.loggedIn);
    return (
      <div className="App">
        {this.props.loggedIn ? <VerticalNavBar /> : null}
        <div><NavBar /></div>
      
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/signup" component={Signup} />
          <Route path="/search" component={FindSitter} />
          <Route path="/myhostprof" component={MyHostPage} />
          <Route path="/mydogprof" component={MyDogPage} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id
});
export default connect(mapStateToProps, actions)(App);
