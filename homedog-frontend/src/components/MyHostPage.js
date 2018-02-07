import React, { Component } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import withAuth from './hocs/withAuth'
import ReservationCard from './detailCards/ReservationCard'

class MyHostPage extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllReservations();
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
            <p>Im Dog-Sitting These Days:</p>
            {me.host_reservations.length === 0 ? "You are not dog-sitting!" : null} 
            {me.host_reservations.map((rsr, i) => <ReservationCard key={i} reservation={rsr}/>)}
            <button className="ui basic green button">Update your Host Profile</button>
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
export default withAuth(connect(mapStateToProps, actions)(MyHostPage))
