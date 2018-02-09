import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
import * as actions from '../../actions'

class ReservationCard extends React.Component {

  handleClick = (e) => {
    console.log(e.target.value);
    this.props.deleteReservation(parseInt(e.target.value), this.props.history)
  }

  render() {
    const {reservation, key, allUsers} = this.props
    const who = allUsers.find(x => x.id === reservation.host_id)
    console.log("rsr card", this.props);

    return(
      <div className="ui card" key={key}>
        <p>When: {reservation.start_date} - {reservation.end_date}</p>
        <p>With? {who.username}</p>
        <p>{who.address}</p>
        {reservation.review ? null : <button value={reservation.id} className="ui basic green button" onClick={this.handleClick}>Delete Booking</button>}
      </div>
    )
  }
}
const mapStateToProps = ({ users }) => ({
  allUsers: users
});
export default withRouter(connect(mapStateToProps, actions)(ReservationCard))
