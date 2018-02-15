import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class UpdateHost extends React.Component {
  state = {
    address: this.props.me.address,
    description: this.props.me.description,
    is_host: true,
    open: false
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

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

  handleSubmit = (e) => {
    e.preventDefault();
    const { me } = this.props
    const { address, description, is_host } = this.state

    this.props.updateUser(me.id, {address, description, is_host})
    this.setState({
      open: false
    })
  }

  render() {
    return(
      <Modal
        style={{width: "60%"}}
        trigger={<a onClick={this.handleClick}><Icon name="edit"/></a>}
        open={this.state.open}>
        <Modal.Actions>
          <Icon name="x" onClick={this.handleClose}/>
        </Modal.Actions>
        <Modal.Header>Update my host profile</Modal.Header>
        <Modal.Content>
          <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="ui field">
              <label>Address</label>
              <input
              onChange={this.handleChange}
              name="address" value={this.state.address} type="text"/>
            </div>
            <div className="ui field">
              <label>Description</label>
              <input
              onChange={this.handleChange}
              name="description" value={this.state.description} type="text"/>
            </div>
            <Button
            className="ui basic green button"
            icon='check' content='Submit Changes'  />
          </form>
        </Modal.Content>
        <Modal.Actions>
          </Modal.Actions>
      </Modal>
    )
  }

}

export default connect(null, actions)(UpdateHost)
