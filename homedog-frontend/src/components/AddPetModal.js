import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import AddDog from './forms/AddDog'

class AddPetModal extends React.Component {
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

  render() {
    const { me } = this.props
    return(
      <Modal
        trigger={<Button
          basic
          green
          style={{float:"left"}}
          size="tiny"
          icon="green paw" onClick={this.handleClick}/>}
        open={this.state.open}>
        <Modal.Actions>
          <Icon name="x" onClick={this.handleClose}/>
        </Modal.Actions>
        <Modal.Header>Pet's Information</Modal.Header>
        <Modal.Content>
          <AddDog handleClose={this.handleClose} me={me} />
        </Modal.Content>
      </Modal>
    )
  }
}

export default AddPetModal
