import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import Homepage from './Homepage'
import * as actions from '../actions';

class NavBar extends Component {
  render() {
    return (
      <div className="ui fixed top menu">
        <h2 className="header item">Homedog</h2>
        <div>
          <NavLink to="/">Home</NavLink>
          {this.props.loggedIn ? (
            <div ><a
              onClick={e => {
                e.preventDefault();
                this.props.logoutUser();
              }}
              activeStyle={{
        'border-bottom': 'solid'
      }}
            >
              Sign Out
            </a></div>
          ) : (
            <div ><NavLink to="/login" activeStyle={{
        'border-bottom': 'solid'
      }}>Go to Login</NavLink></div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id
});
export default connect(mapStateToProps, actions)(NavBar)
