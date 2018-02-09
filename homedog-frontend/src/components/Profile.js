import React from 'react';
import withAuth from './hocs/withAuth'
import { connect } from 'react-redux'
import { Image } from 'semantic-ui-react'
import * as actions from '../actions'
import AddReviewModal from './forms/AddReviewModal'
import ReservationCard from './detailCards/ReservationCard'


class Profile extends React.Component {
  constructor() {
    super()

    this.state = {
      review: {
        reservation_id: "",
        content: "",
        rating: ''
      }
    }
  }

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllReservations();
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addReview(this.state.review)
    this.setState({
      review: {
        reservation_id: '',
        content: '',
        rating: ''
      }
    })
  }

  handleRating = (e) => {
    console.log("handling rating", e.target.innerText);
    const review = {...this.state.review, rating: parseInt(e.target.innerText)}
    this.setState({
      review: review
    })
  }

  handleChange = (e) => {
    console.log("creating a review", e.target.value);
    const review = {...this.state.review, reservation_id: parseInt(e.target.id), content: e.target.value}
    this.setState({
      review: review
    })
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
    console.log("what are profile page state", this.state.review);
    // debugger


    return (

      <div className="Profile">
        {me ?
          me.owner_reservations ?
            <div>
              <h1>{me.full_name}s Profile</h1>
              <Image style={{width:"150px", "border-style":"solid"}} src={me.blob}
                size='medium' circular/>
              <h3 style={{'font-family': 'Nunito, sans-serif'}}>Your Booked Sitters</h3>
              {me.owner_reservations.map((rsr,i) =>
                <div>
                  <ReservationCard reservation={rsr} key={i}/>
                  {rsr.review ? null : <AddReviewModal
                    id={rsr.id}
                    handleChange={this.handleChange}
                    handleRating={this.handleRating}
                    handleSubmit={this.handleSubmit}/>}
                </div>
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
