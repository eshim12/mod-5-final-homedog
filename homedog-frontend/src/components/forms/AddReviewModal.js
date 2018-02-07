import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const AddReviewModal = ({id, handleSubmit, handleChange}) => {
  return(
    <Modal
      trigger={<Button className="ui basic blue button">Add Review</Button>}>
      <Modal.Header>Review</Modal.Header>
      <Modal.Content>
        <form className="ui form" onSubmit={handleSubmit} >
          <div className="ui field">
            <input id={id} onChange={handleChange} name="content" placeholder="Write review..." type="text"/>
          </div>
          <Button
          className="ui basic green button"
          icon='check' content='Submit Review'  />
        </form>
      </Modal.Content>
      <Modal.Actions>
        </Modal.Actions>
    </Modal>
  )
}

export default AddReviewModal
