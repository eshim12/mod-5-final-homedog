import React, { Component } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'

class MyDogPage extends Component {
  constructor() {
    super()
  }

  render() {
    const {loggedIn} = this.props
    console.log("dog page", loggedIn);
    return (
      <div className="Profile">
      {loggedIn ?  "My Dog Page" : null}
      </div>

    )
  }
}

const mapStateToProps = ({auth, users}) => (
  {loggedIn: !!auth.currentUser.id,
  currentUser: auth.currentUser,
  allUsers: users
});
export default connect(mapStateToProps, actions)(MyDogPage)
