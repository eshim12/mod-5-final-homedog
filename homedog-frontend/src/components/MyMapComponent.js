import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react';
import { Icon, Popup } from 'semantic-ui-react'
import withAuth from './hocs/withAuth'
import { connect } from 'react-redux'
import * as actions from '../actions'

const style = {
  borderRadius: 0,
  opacity: 0.7,
  padding: '2em',
}

const AnyReactComponent = ({ user }) =>
  <Popup
    trigger={<Icon name="paw"
    size="big"/>}
    inverted
    style={style}>
    <p>{user.username.toUpperCase()}</p> Address: {user.address}

  </Popup>;

class MyMapComponent extends Component {
  static defaultProps = {
    center: {lat: 40.7505045, lng: -73.99343870000001},
    zoom: 11
  };

  render() {
    const { users } = this.props
    console.log(users);
    return (
      <GoogleMapReact
        apiKey={"AIzaSyC6IzqclNMAYmVTOIiCDu78DoLhxSp0h7Y"}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        {users.map(user =>
          <AnyReactComponent
            lat={parseFloat(user.lat)}
            lng={parseFloat(user.lng)}
            user={user}
          />
        )}


      </GoogleMapReact>
    );
  }
}


export default withAuth(connect(null, actions)(MyMapComponent))
