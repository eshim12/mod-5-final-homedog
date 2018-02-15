import React, { Component } from 'react'
import * as actions from '../../actions'
import { connect } from 'react-redux'
import { Message, Divider } from 'semantic-ui-react'
import HostCard from '../detailCards/HostCard'
import withAuth from '../hocs/withAuth'
import MyMapComponent from '../MyMapComponent'
// import Email from '../../Email'

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
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  noOverlapListings = (start_date, end_date) => {
    const myStart = new Date(start_date).toISOString();
    const myEnd = new Date(end_date).toISOString();
    console.log(myStart, myEnd);
    let arr = []
    const reservations = this.props.allReservations.filter(reservation => {
      const start = new Date(reservation.start_date).toISOString()
      const end = new Date(reservation.end_date).toISOString()
      return (end >= myStart && start <= myEnd)
    });
    reservations.forEach(rsr => {
      arr.push(rsr.host_id)
      arr.push(rsr.pet_owner_id)
      console.log(arr);
    });
    const yesUsers = this.props.allUsers.filter(user => !arr.includes(user.id))
    return yesUsers
  };

  confirmSitter = (data) => {
    this.props.addReservation({start_date: data.start_date, end_date: data.end_date, host_id: data.host_id, pet_owner_id: this.props.currentUser.id}, this.props.history)
    // Email()
    this.setState({
      start_date: '',
      end_date: ''
    })
  }

  render() {
    const {allUsers, currentUser, me} = this.props
    const {start_date, end_date} = this.state
    let alert;
    let available;

    start_date ? new Date(start_date).toISOString() < new Date().toISOString() ? alert = <Message style={{width:"250px"}} negative >Selected date has passed</Message> : null :null

    if (start_date && end_date) {
      if (new Date(end_date).toISOString() < new Date(start_date).toISOString()) {
        alert = <Message style={{width:"250px"}}negative >Please select a valid date</Message>
      } else {
        available = this.noOverlapListings(start_date, end_date).filter(x => x.id !== this.props.currentUser.id)
      }
    }

    return (

      <div style={{paddingTop: "20px"}}className="Profile ui stackable two column grid">
        <div className="column"><center>
          <div><h1>Search for a Sitter</h1>
          <form className="ui form sitter">
            <label>Start Date</label>
            <input onChange={this.handleChange} name="start_date" type="date"/>
            <label>End Date</label>
            <input onChange={this.handleChange} name="end_date" type="date"/>
          </form></div>
          {alert}
          <br/>
          <div className="ui two column centered grid"><center>
            {available ?  available.map((user,i) => {
              return <div className="two column centered row" style={{padding:"10px"}}>
                <HostCard
                  pet_owner={me}
              start_date={start_date}
              end_date={end_date}
              confirmSitter={this.confirmSitter}
              user={user}
              index={i}/>
                </div>}
            ) : <p>Nobody available on those dates</p>}
          </center></div>
          <Divider hidden/>
        </center></div>
      <div className="column"><center>
          {available ? <div style={{width: '100%', height: '600px', padding:"20px"}} className="column">
            <MyMapComponent users={available}/>
          </div> : null}
        </center></div>
      </div>
    )
  }
}

const mapStateToProps = ({auth, users, reservations}) => ({
  loggedIn: !!auth.currentUser.id,
  currentUser: auth.currentUser,
  allUsers: users,
  me: users.find(x => x.username === auth.currentUser.username),
  allReservations: reservations
});

export default withAuth(connect(mapStateToProps, actions)(FindSitter))
