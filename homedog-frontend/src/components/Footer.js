import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted fixed="bottom" className="footer">
        <Menu.Item header><Icon name="paw"/></Menu.Item>
        <Menu.Item>
          <NavLink to="/homepage"><h4 className="footer">About Homedog</h4></NavLink>
        </Menu.Item>
        <Menu.Item className="footer" name='jobs' active={activeItem === 'jobs'} onClick={this.handleItemClick} />
        <Menu.Item className="footer" name='locations' active={activeItem === 'locations'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}
