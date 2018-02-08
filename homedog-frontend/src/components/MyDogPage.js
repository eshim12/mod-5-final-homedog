import React, { Component } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import withAuth from './hocs/withAuth'
import PetCard from './detailCards/PetCard'
import AddPetModal from './AddPetModal'

class MyDogPage extends Component {
  constructor() {
    super()

    this.state = {
      btnClicked: false
    }
  }

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllReservations();
  }

  handleClick = () => {
    this.setState({
      btnClicked: !this.state.btnClicked
    })
  }

  addPet = (data) => {
    console.log("creating a pet", data, this.props.history);
    this.props.addPet(data, this.props.history)
  }

  render() {
    const {loggedIn, currentUser, allUsers} = this.props
    console.log("dog page", loggedIn);
    let me;
    me = allUsers ? allUsers.find(x => x.username === currentUser.username) : null
    console.log("in dog pg me?", me);


    return (
      <div className="Profile">
      {loggedIn && me ?
        <div>
          {me.pets.map((pet,i) =>
            <PetCard key={i} pet={pet} />)}
          <AddPetModal me={currentUser}/>
        </div>
      : null}
      </div>

    )
  }
}

const mapStateToProps = ({auth, users}) => (
  {loggedIn: !!auth.currentUser.id,
  currentUser: auth.currentUser,
  allUsers: users
});
export default withAuth(connect(mapStateToProps, actions)(MyDogPage))
