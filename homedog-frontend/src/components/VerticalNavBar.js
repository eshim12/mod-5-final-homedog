import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import Homepage from './Homepage'
import * as actions from '../actions';

class VerticalNavBar extends Component {
  constructor() {
    super();

  }
  render() {
    const vertStyle = {
      'padding-top': '80px'
    }

    return (
      <div className="ui secondary fixed left vertical menu" style={vertStyle}>
        <NavLink className="item" to="/profile">My Profile</NavLink>
        <NavLink className="item" to="/search">Find Sitter</NavLink>
        <NavLink className="item" to="/myhostprof">My Host Page</NavLink>
        <NavLink className="item" to="/mydogprof">My Dog Page</NavLink>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id
});
export default connect(mapStateToProps, actions)(VerticalNavBar)
