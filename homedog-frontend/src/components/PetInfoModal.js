import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import PetCard from './detailCards/PetCard'

const PetInfoModal = ({user}) => (
  <Modal trigger={<Icon name="green paw"/>}>
    <Modal.Header>{user.username}s Pets</Modal.Header>
    <Modal.Content image scrolling>
      {user.pets.map(pet => <PetCard pet={pet}/> )}

    </Modal.Content>

  </Modal>
)

export default PetInfoModal
