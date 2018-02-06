import React from 'react'

class ReservationCard extends React.Component {
  constructor() {
    super()
  }

  handleClick = (e) => {
    console.log(e.target.value);
  }

  render() {
    const {reservation, key} = this.props
    return(
      <div className="ui card" key={key}>
        <p>When: {reservation.start_date}</p>
        <p>Till: {reservation.end_date}</p>
        <button value={reservation.id} className="ui basic green button" onClick={this.handleClick}>Delete Booking</button>
      </div>
    )
  }
}

export default ReservationCard
