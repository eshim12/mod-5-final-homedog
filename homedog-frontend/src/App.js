import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/Login';
// import Profile from './Profile';
import * as actions from './actions';

class App extends Component {
  render() {
    console.log(this.props.loggedIn);
    return (
      <div className="App">
        <h2>Homedog</h2>
        <ul>
          <dl>
            {this.props.loggedIn ? (
              <a
                onClick={e => {
                  e.preventDefault();
                  this.props.logoutUser();
                }}
              >
                Sign Out
              </a>
            ) : (
              <Link to="/login">Go to Login</Link>
            )}
          </dl>
        </ul>
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
