import React from 'react'
import { Button, Modal, Dropdown, Icon } from 'semantic-ui-react'

const ratings = [
  {key:1, value:1,text:1},
  {key:2, value:2,text:2},
  {key:3, value:3,text:3},
  {key:4, value:4,text:4}]

const AddReviewModal = ({id, handleSubmit, handleChange, handleRating}) => {
  return(
    <Modal
      trigger={<p style={{float:"right", fontFamily: 'Julius Sans One, sans-serif', fontSize:"10px"}}>write a review <Icon name="green compose"/></p>}>
      <Modal.Header>Review</Modal.Header>
      <Modal.Content>
        <form className="ui form" onSubmit={handleSubmit} >
          <Dropdown onChange={handleRating} placeholder="Rating" search selection options={ratings}/>
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
