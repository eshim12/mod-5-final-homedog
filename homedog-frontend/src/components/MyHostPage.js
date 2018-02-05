import React, { Component } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'

class MyHostPage extends Component {
  constructor() {
    super()
  }

  render() {
    console.log("host page", this.props.loggedIn);
    const {currentUser, allUsers} = this.props
    let me;
    me = allUsers ? allUsers.find(x => x.username === currentUser.username) : null
    // debugger
    return (
      <div className="Profile">
        {me ?
          me.is_host ?
          <div>
            <h1>My Host Profile</h1>
            <p>My Address: {me.address}</p>
            <p>Description: {me.description}</p>
            <ul>My Bookings {me.host_reservations.map((rsr, i) => <dl key={i}>reservations</dl>)}</ul>
          </div>
          : <div><p>"you are not a host"</p> <button className="ui basic green button">Update your Host Profile</button></div>
        : null}
      </div>
    )
  }
}

const mapStateToProps = ({auth, users}) => (
  {loggedIn: !!auth.currentUser.id,
  currentUser: auth.currentUser,
  allUsers: users
});
export default connect(mapStateToProps, actions)(MyHostPage)
