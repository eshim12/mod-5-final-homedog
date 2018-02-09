import React, { Component } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'
import withAuth from './hocs/withAuth'
import ReservationCard from './detailCards/ReservationCard'
import UpdateHost from './forms/UpdateHost'

class MyHostPage extends Component {

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllReservations();
  }

  handleUpdate = (reservation) => {
    this.props.updateReservation(reservation.id, {has_alert: false})
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
            <UpdateHost me={me}/>
            <p>Im Dog-Sitting These Days:</p>
            {me.host_reservations.length === 0 ? "You are not dog-sitting!" : null}
            {me.host_reservations.map((rsr, i) =>
              <div>
                <br/>
                <ReservationCard key={i} reservation={rsr}/>
                {rsr.has_alert ? ( <Icon  onClick={()=>this.handleUpdate(rsr)} name="red warning"/>) : null}
              </div>
            )}
          </div>
          : <div><p>"you are not a host"</p> <UpdateHost me={me}/></div>
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
