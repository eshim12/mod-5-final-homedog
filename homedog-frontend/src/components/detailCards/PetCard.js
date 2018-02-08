import React from 'react';
import { Image, Card, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class PetCard extends React.Component {

  handleClick = () => {
    const { pet, deletePet } = this.props;

    deletePet(pet.id)
  }

  render() {
    const { pet, key } = this.props
    return(
      <Card style={{width: "100px"}} key={key}>
        <Image src={pet.img}/>
        <Card.Header>{pet.name}</Card.Header>
        <Card.Description>{pet.description}</Card.Description><Icon style={{position:"absolute"}}
        onClick={this.handleClick}
        name="red delete"/>
      </Card>
    )
  }
}


export default connect(null, actions)(PetCard)
