import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import { adapter } from '../../services'
import SitterPopup from '../SitterPopup'
import ReviewsPopup from '../ReviewsPopup'

class HostCard extends React.Component {
  constructor() {
    super()
    this.state = {
      clicked: false,
      distance:""
    }
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  };

  calculateDistance = (start, end) => {
    adapter.distance(start.split(" ").join("+"), end.split(" ").join("+"))
    .then(data => {
      this.setState({
        distance: data.rows[0].elements[0].distance.text
      })
    })
  }

  render() {
    const {index, user, confirmSitter, start_date, end_date, pet_owner} = this.props
    this.calculateDistance(pet_owner.address, user.address)
    return (
      <div>{this.state.clicked ?
      <Card style={{width: "250px"}} key={index}>
        <a onClick={this.handleClick}>close</a>
        <Card.Content >
          <Card.Header>About {user.username}
          </Card.Header>
          <Card.Meta>{user.address}
          </Card.Meta>
          <Card.Description>
            <p>{user.description}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <SitterPopup
            user={user}
            confirmSitter={confirmSitter}
            start_date={start_date}
            end_date={end_date}/>
          <ReviewsPopup user={user}/>
        </Card.Content>
      </Card> :
      <Card style={{width: "150px"}} onClick={this.handleClick} key={index}>
          <Image src={user.blob} />
        {this.state.distance ? <Card.Meta>
          <Icon name="marker"/>{this.state.distance}
        </Card.Meta>: console.log("no distance")}
        <Card.Content >
          <h3>{user.full_name}</h3>
        </Card.Content>
      </Card>}</div>
    )
  }
}

export default HostCard
