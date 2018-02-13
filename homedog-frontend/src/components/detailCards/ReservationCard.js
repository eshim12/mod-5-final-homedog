import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { Button, Card, Icon } from 'semantic-ui-react'
import * as actions from '../../actions'
import ConfirmDeletePopup from '../ConfirmDeletePopup'

class ReservationCard extends React.Component {

  handleClick = (e) => {
    console.log("handling reservation delete", e.target.value);
    this.props.deleteReservation(parseInt(e.target.value), this.props.history)
  }

  render() {
    const {reservation, key, allUsers} = this.props
    const who = allUsers.find(x => x.id === reservation.host_id)
    console.log("rsr card", this.props);

    return(
      <Card.Content className="ui card" key={key}>
        {reservation.review ? null : <div>
          <ConfirmDeletePopup id={reservation.id} handleClick={this.handleClick}/>
          </div>}
        <Card.Header>With {who.username}</Card.Header>
        <Card.Description>
          <p>{reservation.start_date} to {reservation.end_date}</p>
          <p>{who.address}</p>
        </Card.Description>
      </Card.Content>
    )
  }
}
const mapStateToProps = ({ users }) => ({
  allUsers: users
});
export default withRouter(connect(mapStateToProps, actions)(ReservationCard))
