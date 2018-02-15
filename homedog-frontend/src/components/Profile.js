import React from 'react';
import withAuth from './hocs/withAuth'
import { connect } from 'react-redux'
import { Grid, Image, Card } from 'semantic-ui-react'
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
  upcomingSitter = (rsrs) => {
    const todayone = new Date();
    todayone.setDate(todayone.getDate() + 1)
    const today = new Date ();
    return rsrs.filter(x => (
      // debugger
      new Date(x.start_date).toISOString().slice(0, 10) === todayone.toISOString().slice(0,10)))

  }

  render() {
    console.log("profile page", this.props);
    const {currentUser, allUsers} = this.props
    let me;
    let upcoming;
    me = allUsers ? allUsers.find(x => x.username === currentUser.username) : null
    if (me) {
      const rsrs = me.owner_reservations.sort(function(a,b){return new Date(b.start_date) - new Date(a.start_date)})
      upcoming = this.upcomingSitter(rsrs)
      console.log(upcoming);
    }
    // debugger
    console.log("do I have me", me);

    return (

      <div className="Profile">
        {me ?
          me.owner_reservations ?
            <Grid divided="vertically">
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image style={{width:"150px"}} src={me.blob}
                    size='medium' circular bordered/>
                </Grid.Column>
                <Grid.Column>
                  <h1>{me.full_name}</h1>
                  <h3 style={{fontFamily: 'Nunito, sans-serif'}}>Your Upcoming Sitters</h3>
                  {upcoming ? upcoming.length > 0 ? upcoming.map(x=> <p>{x.start_date}</p>): "You have no upcoming sitters" : "You have no upcoming sitters" }
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <h2 style={{fontFamily: 'Nunito, sans-serif'}}>Your Booked Sitters</h2>
                  <Card.Group itemsPerRow={3}>
                    {me.owner_reservations.sort(function(a,b){return new Date(b.start_date) - new Date(a.start_date)}).map((rsr,i) =>
                      <Card>
                        <ReservationCard who={rsr.host_id} reservation={rsr} key={i}/>
                        {rsr.review ? null : <div>
                          <AddReviewModal
                          id={rsr.id}
                          handleChange={this.handleChange}
                          handleRating={this.handleRating}
                          handleSubmit={this.handleSubmit}/></div>}
                        </Card>
                      )}
                    </Card.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          : null

        : <div className="loader"></div>}

      </div>
    )
  }
}

const mapStateToProps = ({auth, users}) => ({
  currentUser: auth.currentUser,
  allUsers: users,
  // me: users.find(x => x.username === auth.currentUser.username)
});

export default withAuth(connect(mapStateToProps, actions) (Profile))
