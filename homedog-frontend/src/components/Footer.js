import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import Homepage from './Homepage'
import * as actions from '../actions';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      imagePreviewUrl: ""
    }
  }
  render() {


    return (
      <div className="ui bottom menu">
        <h1 className="header item">
          <div>Homed</div>
          <div><img src={require('../images/paw-p.jpg')}/></div>
          <div>g</div>
        </h1>
          <NavLink className="item" to="/">Home</NavLink>
          { this.props.loggedIn ? (
            <a
              className="item"
            onClick={e => {
              e.preventDefault();
              this.props.logoutUser();
            }}>Sign Out</a> ) : (
            <div className="item">
              <NavLink to="/login">
                  Go to Login
              </NavLink>
            </div>) }

          { !this.props.loggedIn ? (
            <div className="right item">
              <NavLink
                to="/signup">
                  Sign Up!
                </NavLink>
              </div>
          ) : null }

          { this.props.loggedIn ? (<div className="right header item">Welcome {this.props.currentUser.username}!</div> ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id,
  currentUser: state.auth.currentUser
});
export default connect(mapStateToProps, actions)(Footer)
