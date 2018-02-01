import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import Homepage from './Homepage'
import * as actions from '../actions';

class NavBar extends Component {
  render() {
    return (
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
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id
});
export default connect(mapStateToProps, actions)(NavBar)
