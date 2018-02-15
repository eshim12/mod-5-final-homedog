import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import * as actions from '../../actions'
import ConfirmDeletePopup from '../ConfirmDeletePopup'

class ReservationCard extends React.Component {

  // handleClick = (e) => {
  //   console.log("handling reservation delete", e.target.value);
  //   this.props.deleteReservation(parseInt(e.target.value), this.props.history)
  //   this.props.handleClose()
  // }

  render() {
    const {who, reservation, key, allUsers} = this.props
    const user = allUsers.find(x => x.id === who)
    const today = new Date().toISOString()

    return(
      <Card.Content style={{fontFamily: 'Julius Sans One, sans-serif'}} key={key}>
        {reservation.review || new Date(reservation.start_date).toISOString().slice(0,10) <= today.slice(0,10) ? null : <div>
          <ConfirmDeletePopup id={reservation.id}/>
          </div>}
        <Card.Header style={{fontFamily: 'Julius Sans One, sans-serif'}}><Image src={user.blob} avatar/>{user.username}</Card.Header>
        <Card.Description>
          <p>{reservation.start_date} to {reservation.end_date}</p>
          <p>{user.address}</p>
        </Card.Description>
      </Card.Content>
    )
  }
}
const mapStateToProps = ({ users }) => ({
  allUsers: users
});
export default withRouter(connect(mapStateToProps, actions)(ReservationCard))
