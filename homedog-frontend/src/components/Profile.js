import React from 'react';
import withAuth from './hocs/withAuth'
import * as actions from '../actions'
import { connect } from 'react-redux'
import ReservationCard from './detailCards/ReservationCard'


class Profile extends React.Component {

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllReservations();
  }

  // upcomingSitter = (me) => {
  //   const startD = me.owner_reservations[me.owner_reservations.length - 1]
  //   let today = new Date()
  //   let day = new Date()
  //   day.setDate(day.getDate() - 5)
  //   if (new Date(startD.start_date) >= day && startD <= today) {
  //     return `YOU APPT IS ${startD.start_date}`
  //   } else {null}
  // }

  render() {
    console.log("profile page", this.props);
    const {currentUser, allUsers} = this.props
    let me;
    me = allUsers ? allUsers.find(x => x.username === currentUser.username) : null

    console.log("do I have me", me);
    // debugger


    return (

      <div className="Profile">
        {me ?
          me.owner_reservations ?
            <div>
              <h2>{me.full_name}'s Profile!</h2>
              <h3>Your Booked Sitters</h3>
              {me.owner_reservations.map((rsr,i) =>
                <ReservationCard reservation={rsr} key={i}/>
              )}
            </div>
          : null

        : "loading!"}

      </div>


    )
  }
}

const mapStateToProps = ({auth, users}) => ({
  currentUser: auth.currentUser,
  allUsers: users
});
export default withAuth(connect(mapStateToProps, actions) (Profile))
