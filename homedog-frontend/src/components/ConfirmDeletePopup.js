import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal, Icon } from 'semantic-ui-react'
import * as actions from '../actions'

class ConfirmDeletePopup extends Component {
  state = { open: false }

  handleClick = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  handleDelete = (e) => {
    console.log("handling reservation delete", e.target.value);
    this.props.deleteReservation(parseInt(e.target.value))
    this.handleClose()
  }

  render() {
    const {id} = this.props
    return (
      <Modal
        open={this.state.open}
        closeOnDimmerClick={true}
        trigger={<Button
          onClick={this.handleClick}
          floated="left" basic circular size="tiny" icon="red x"/>}>
        <Modal.Actions>
          <Icon name="x" onClick={this.handleClose}/>
        </Modal.Actions>
        <Modal.Header>Confirm Sitter</Modal.Header>
        <Modal.Description>
          <h3>Are you sure you want to delete this reservation?</h3>
        </Modal.Description>
        <Modal.Actions>
          <Button
            className="ui basic red button"
            value={id}
            icon='check' content='Confirm'
            onClick={this.handleDelete} />
        </Modal.Actions>
      </Modal>
    )
  }
}

export default connect(null, actions)(ConfirmDeletePopup)
