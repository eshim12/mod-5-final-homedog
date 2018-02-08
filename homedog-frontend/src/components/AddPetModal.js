import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import AddDog from './forms/AddDog'

const AddPetModal = ({me}) => {
  console.log("pet modal me?", me);
  return(
    <Modal
      trigger={<Button className="ui basic blue button">Add a Dog</Button>}>
      <Modal.Header>Pet Info</Modal.Header>
      <Modal.Content>
        <AddDog me={me} />
      </Modal.Content>
      <Modal.Actions>
        </Modal.Actions>
    </Modal>
  )
}

export default AddPetModal
