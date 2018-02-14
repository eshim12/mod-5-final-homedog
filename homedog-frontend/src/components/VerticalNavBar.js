import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dropdown, Icon, Image } from 'semantic-ui-react'
// import Homepage from './Homepage'
import * as actions from '../actions';

class VerticalNavBar extends Component {

  render() {
    const { currentUser, allUsers } = this.props
    let me;
    me = allUsers ? allUsers.find(x => x.username === currentUser.username) : null

    return (

      <Dropdown trigger={<Image src={me.blob} avatar/>} className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>
          <NavLink className="item" to="/profile">My Profile</NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink className="item" to="/search">Find Sitter</NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink className="item" to="/myhostprof">My Host Page{ me ? me.host_reservations.map(rsr => rsr.has_alert).includes(true) ? <Icon name="red warning"/> : null : null}</NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink className="item" to="/mydogprof">My Dog Page</NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <a onClick={e => {e.preventDefault();
            this.props.logoutUser();
          }}><h4 className="item">Sign Out</h4></a>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    )
  }
}

const mapStateToProps = ({auth, users}) => ({
  loggedIn: !!auth.currentUser.id,
  currentUser: auth.currentUser,
  allUsers: users
});
export default connect(mapStateToProps, actions)(VerticalNavBar)
