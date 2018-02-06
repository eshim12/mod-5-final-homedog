import React, { Component } from 'react'
import * as actions from '../../actions'
import { connect } from 'react-redux'
import HostCard from '../detailCards/HostCard'
import withAuth from '../hocs/withAuth'

class FindSitter extends Component {
  constructor() {
    super();

    this.state = {
      start_date: "",
      end_date: ""
    }
  }

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllReservations();
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  noOverlapListings = (start_date, end_date) => {
    const myStart = new Date(start_date);
    const myEnd = new Date(end_date);
    let arr = []
    const reservations = this.props.allReservations.filter(reservation => {
      const start = new Date(reservation.start_date)
      const end = new Date(reservation.end_date)
      return (myStart >= start && myEnd <= end)
    });
    reservations.forEach(rsr => {
      arr.push(rsr.host_id, rsr.pet_owner_id)
    });
    const yesUsers = this.props.allUsers.filter(user => !arr.includes(user.id))
    return yesUsers

    console.log("this many people overlap", yesUsers);
  };

  confirmSitter = (data) => {
    // need a pet_owner_id not included in data
    console.log("in confirm button");

    this.props.addReservation({start_date: data.start_date, end_date: data.end_date, host_id: data.host_id, pet_owner_id: this.props.currentUser.id}, this.props.history)

    this.setState({
      start_date: '',
      end_date: ''
    })
  }

  render() {
    console.log("sitter page", this.props.loggedIn);
    console.log("sitter page all reservations", this.props.allReservations);
    const {start_date, end_date, results} = this.state
    let available;
    if (start_date && end_date) {
     available = this.noOverlapListings(start_date, end_date)

    }

    return (

      <div className="Profile">
        <h1>Search for a Sitter</h1>
        <form>
          <label>Start Date</label>
          <input onChange={this.handleChange} name="start_date" type="date"/>
          <label>End Date</label>
          <input onChange={this.handleChange} name="end_date" type="date"/>
        </form>
        <br/>
        <div className="ui three cards">
          {available ?  available.map((user,i) =>
              <HostCard
              start_date={start_date}
              end_date={end_date}
              confirmSitter={this.confirmSitter}
              user={user}
              index={i}/>
          ) : "Nobody available on those dates"}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({auth, users, reservations}) => (
  {loggedIn: !!auth.currentUser.id,
  currentUser: auth.currentUser,
  allUsers: users,
  allReservations: reservations
});
export default withAuth(connect(mapStateToProps, actions)(FindSitter))
