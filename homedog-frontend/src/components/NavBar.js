import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Segment } from 'semantic-ui-react'
// import Homepage from './Homepage'
import * as actions from '../actions';
import VerticalNavBar from './VerticalNavBar'

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      imagePreviewUrl: ""
    }
  }
  render() {
    return (
      <div>
        <Menu pointing secondary fixed="top">
          <Menu.Header>
            <VerticalNavBar />
          </Menu.Header>
          <Menu.Header >
            <div className="logo">Homed<img src={require('../images/paw-p.jpg')}/>g</div>
            {/*<div style={{"font-size":"30px"}} className="logo">Homed</div>
            <div className="logo"><img src={require('../images/paw-p.jpg')}/></div>
            <div style={{"font-size":"30px"}} className="logo">g</div>*/}
          </Menu.Header>
          <Menu.Item>
            <NavLink to="/homepage"><h4 className="navBar">Home</h4></NavLink>
          </Menu.Item>
          <Menu.Item position="right">
            { this.props.loggedIn ? (<div><p style={{"font-size": "15px"}} className="navBar">Welcome {this.props.currentUser.username}!</p></div> ) : null}
          </Menu.Item>
          <Menu.Item position="right">
            { this.props.loggedIn ? (
              <a
                onClick={e => {
                  e.preventDefault();
                  this.props.logoutUser();
                }}><h4 className="navBar">Sign Out</h4></a> ) : (
                  <div>
                    <NavLink to="/login">
                      <h4 className="navBar">Login</h4>
                    </NavLink>
                  </div>) }
          </Menu.Item>
        </Menu>
      </div>
    )

  }
}

// return (
//   <div>
//     <div style={{width: "100%"}} className="ui fixed top menu borderless">
//       <VerticalNavBar />
//       <h1 p style={{"font-size": "25px"}} className="header item navBar">
//         <div>Homed</div>
//         <div><img src={require('../images/paw-p.jpg')}/></div>
//         <div>g</div>
//       </h1>
//       <NavLink className="item" to="/homepage"><h4 className="navBar">Home</h4></NavLink>
//
//       { this.props.loggedIn ? (<div className="item"><p style={{"font-size": "15px"}} className="navBar">Welcome {this.props.currentUser.username}!</p></div> ) : null}
//
//       { this.props.loggedIn ? (
//         <a
//           className="right item"
//           onClick={e => {
//             e.preventDefault();
//             this.props.logoutUser();
//           }}><h4 className="navBar">Sign Out</h4></a> ) : (
//             <div className="right item">
//               <NavLink to="/login">
//                 <h4 className="navBar">Login</h4>
//               </NavLink>
//             </div>) }
//           </div>
//         </div>
//       )
const mapStateToProps = state => ({
  loggedIn: !!state.auth.currentUser.id,
  currentUser: state.auth.currentUser
});
export default connect(mapStateToProps, actions)(NavBar)

//
