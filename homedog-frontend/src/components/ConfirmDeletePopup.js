import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const ConfirmDeletePopup = ({handleClick, id}) => {
  console.log("in popup");

  return (
    <Modal
      trigger={<Button floated="right" basic circular size="tiny" icon="red x"/>}>
      <Modal.Header>Confirm Sitter</Modal.Header>
      <Modal.Description>
        <h3>Are you sure you want to delete this reservation?</h3>
      </Modal.Description>
      <Modal.Actions>
          <Button
            className="ui basic red button"
            value={id}
            icon='check' content='Confirm' onClick={handleClick} />
        </Modal.Actions>
    </Modal>
  )
}

export default ConfirmDeletePopup
