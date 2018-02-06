import React from 'react'
import SitterPopup from '../SitterPopup'

class HostCard extends React.Component {
  constructor() {
    super()
    this.state = {
      clicked: false,
      confirmClicked: false
    }
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  };

  handleBooking = () => {
    this.setState({
      confirmClicked: !this.state.confirmClicked
    })
  }

  render() {
    console.log("confirm clicked", this.state.confirmClicked);
    const {index, user, confirmSitter, start_date, end_date} = this.props
    return (
      <div>{this.state.clicked ?
      <div key={index} className="ui card">
        <a onClick={this.handleClick}>close</a>
        <div className="content">
          <div className="header">About {user.username}</div>
          <div className="meta">2 days ago</div>
          <div className="description">
            <p>{user.description}</p>
          </div>
        </div>
        <div className="extra content">
          <SitterPopup
            user={user}
            confirmSitter={confirmSitter}
            start_date={start_date}
            end_date={end_date}/>

        </div>
      </div> :
      <div onClick={this.handleClick} key={index} className="ui card">
        {user.full_name}
        <div className="ui star rating" data-rating="4"></div>
      </div>}</div>
    )
  }
}

export default HostCard
