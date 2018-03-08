import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Icon } from 'semantic-ui-react'
// import Homepage from './Homepage'
import * as actions from '../actions';
import VerticalNavBar from './VerticalNavBar'

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      imagePreviewUrl: ""
    }
  }
  render() {
    console.log("nav bar me?", this.props.me);
    return (
      <div>
        {this.props.loggedIn && this.props.me ?
        <Menu style={{backgroundColor:"rgba(255,255,255,0.5)"}} pointing stackable secondary fixed="top">
          <Menu.Item>
            <div className="logo">Homed<Icon name="paw"/>g</div>
          </Menu.Item>
          <Menu.Menu position="right" className="vertical">
            <Menu.Item >
              <p style={{fontSize: "15px"}} className="navBar">Welcome {this.props.currentUser.username}!</p>
            </Menu.Item>
            <Menu.Header>
              <VerticalNavBar />
            </Menu.Header>
          </Menu.Menu>
        </Menu> :
          <Menu pointing secondary fixed="top">
            <Menu.Header >
              <div className="logo">Homed<img src={require('../images/pawpaw.png')}/>g</div>
            </Menu.Header>
            <Menu.Item position="right">
              <NavLink to="/login">
                <h4 className="navBar">Login</h4>
              </NavLink>
            </Menu.Item>
          </Menu> }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id,
  currentUser: state.auth.currentUser,
  me: state.users.find(x => x.username === state.auth.currentUser.username)
});

export default connect(mapStateToProps, actions)(NavBar)
