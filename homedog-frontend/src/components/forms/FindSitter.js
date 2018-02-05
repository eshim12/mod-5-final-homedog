import React, { Component } from 'react'
import * as actions from '../../actions'
import { connect } from 'react-redux'

class FindSitter extends Component {
  constructor() {
    super();

    this.state = {
      start_date: "",
      end_date: ""
    }
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
    {/*const users
    get all the matching users through the entire list of reservations*/}
  }

  render() {
    console.log("sitter page", this.props.loggedIn);
    console.log("sitter page all reservations", this.props.allReservations);
    const {start_date, end_date} = this.state
    let overlap;
    if (start_date && end_date) {
      const myStart = new Date(start_date);
      const myEnd = new Date(end_date);
      const hostStart = new Date("2018-12-12");
      const hostEnd = new Date("2018-12-16")
      if (myStart >= hostStart && myEnd <= hostEnd) {
        overlap = true
      } else {
        overlap = false
      }
    }

    return (
      <div className="Profile">
        <h1>Search for a Sitter</h1>
        <form>
          <label>Start Date</label>
          <input onChange={this.handleChange} name="start_date" type="date"/>
          <label>End Date</label>
          <input name="end_date" type="date"/>
        </form>
        { overlap ? "THERE IS AN OVERLAP": "THERE IS NO OVERLAP"}
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
export default connect(mapStateToProps, actions)(FindSitter)
