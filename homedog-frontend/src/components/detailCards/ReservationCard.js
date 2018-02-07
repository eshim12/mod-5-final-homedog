import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions'

class ReservationCard extends React.Component {
  constructor() {
    super()
  }

  handleClick = (e) => {
    console.log(e.target.value);
    this.props.deleteReservation(parseInt(e.target.value), this.props.history)

  }

  render() {
    const {reservation, key} = this.props
    console.log("rsr card", this.props);
    return(
      <div className="ui card" key={key}>
        <p>When: {reservation.start_date}</p>
        <p>Till: {reservation.end_date}</p>
        {reservation.review ? null : <button value={reservation.id} className="ui basic green button" onClick={this.handleClick}>Delete Booking</button>}
      </div>
    )
  }
}

export default withRouter(connect(null, actions)(ReservationCard))
