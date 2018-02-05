import React from 'react';
import withAuth from './hocs/withAuth'
import * as actions from '../actions'
import { connect } from 'react-redux'
import VerticalNavBar from './VerticalNavBar'

const Profile = props => {
  console.log("profile page", props.currentUser);
  return (
    <div>
      <VerticalNavBar />
      <div className="Profile">
        Welcome {props.currentUser.username}!
      </div>

    </div>
  )
}

const mapStateToProps = state => (
  {loggedIn: !!state.auth.currentUser.id,
  currentUser: state.auth.currentUser
});
export default withAuth(connect(mapStateToProps, actions) (Profile))
