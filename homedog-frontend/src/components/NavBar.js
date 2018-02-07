import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import Homepage from './Homepage'
import * as actions from '../actions';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      imagePreviewUrl: ""
    }
  }
  render() {


    return (
      <div className="ui fixed top menu borderless">
        <h1 p style={{"font-size": "25px"}} className="header item navBar">
          <div>Homed</div>
          <div><img src={require('../images/paw-p.jpg')}/></div>
          <div>g</div>
        </h1>
          <NavLink className="item" to="/homepage"><h4 className="navBar">Home</h4></NavLink>

        { this.props.loggedIn ? (<div className="item"><p style={{"font-size": "15px"}} className="navBar">Welcome {this.props.currentUser.username}!</p></div> ) : null}

          { this.props.loggedIn ? (
            <a
              className="right item"
            onClick={e => {
              e.preventDefault();
              this.props.logoutUser();
            }}><h4 className="navBar">Sign Out</h4></a> ) : (
            <div className="right item">
              <NavLink to="/login">
                  <h4 className="navBar">Login</h4>
              </NavLink>
            </div>) }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id,
  currentUser: state.auth.currentUser
});
export default connect(mapStateToProps, actions)(NavBar)
