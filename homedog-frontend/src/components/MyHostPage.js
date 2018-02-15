import React, { Component } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { Icon, Card, Grid } from 'semantic-ui-react'
import withAuth from './hocs/withAuth'
import ReservationCard from './detailCards/ReservationCard'
import UpdateHost from './forms/UpdateHost'
import ReviewsPopup from './ReviewsPopup'

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
          <Grid divided="vertically">
            <Grid.Row columns={2}>
              <Grid.Column>
                <h1>My Host Profile</h1>
                <p>My Address: {me.address}</p>
                <p>Description: {me.description}</p>
                <UpdateHost me={me}/>
              </Grid.Column>
              <Grid.Column>
                <h3 style={{fontFamily:"Nunito, sans-serif"}}>Read what pet owners said about you! </h3>
                <ReviewsPopup user={me}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <h3 style={{fontFamily:"Nunito, sans-serif"}}>Im Dog-Sitting These Days: </h3>
                {me.host_reservations.length === 0 ? <p> You are not dog-sitting!</p> : null}
                <Card.Group itemsPerRow={3}>
                  {me.host_reservations.map((rsr, i) =>
                    <Card>
                      <br/>
                      <ReservationCard key={i} who={rsr.pet_owner_id} reservation={rsr}/>
                      {rsr.has_alert ? ( <Icon  onClick={()=>this.handleUpdate(rsr)} name="red warning"/>) : null}
                    </Card>
                  )}
                </Card.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          : <div><p>You are not a host</p> <UpdateHost me={me}/></div>
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
