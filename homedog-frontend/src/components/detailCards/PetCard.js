import React from 'react';
import { Image, Card } from 'semantic-ui-react'

const PetCard = ({pet, key}) => {
  return(
    <Card style={{width: "100px"}} key={key}>
      <Image src={pet.img}/>
      <Card.Header>{pet.name}</Card.Header>
      <Card.Description>{pet.description}</Card.Description>
    </Card>
  )
}


export default PetCard
