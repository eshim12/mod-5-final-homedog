import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/forms/Login';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Signup from './components/forms/Signup';
import FindSitter from './components/forms/FindSitter';
import MyHostPage from './components/MyHostPage';
import MyDogPage from './components/MyDogPage'
import * as actions from './actions';

class App extends Component {


  render() {
    const {loggedIn} = this.props
    console.log("app page", this.props.loggedIn)

    return (
      <div className="App bg">
        {!loggedIn ? <video muted autoPlay loop id="myVideo">
          <source src={require("./video/beachpuppy.mp4")} type="video/mp4"/>
        </video> : null}
        <div><NavBar /></div>
        <div><Footer /></div>

        <Switch>
          <Route path="/homepage" component={Homepage} />
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
