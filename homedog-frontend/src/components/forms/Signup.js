import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import { adapter } from '../../services'
import { Button, Popup, Image } from 'semantic-ui-react'

const Info = ({handleCheckbox}) => (
  <Popup
    trigger={<input onChange={handleCheckbox} type="checkbox" id="notHost" name="is_host" value="notHost"/>}
    content="If you don't want to be a host, check box."
    basic
  />
)

class Signup extends Component{
  constructor() {
    super()

    this.state = {
      error: false,
      fields: {
        blob: "",
        username: "",
        full_name: "",
        email: '',
        password: "",
        is_host: true,
        description: "",
        address: "",
        lat: null,
        lng: null
      },
      imagePreviewUrl: "",
      img_file_name: ''
    }
  }

  handleFileChange = (e) => {
    console.log(e.target.files[0]);
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        img_file_name: file,
        imagePreviewUrl: reader.result
      }, () => {
        const imgTag = document.getElementById('profilePic')
        const newFields = { ...this.state.fields, blob: imgTag.src };
        this.setState({
          fields: newFields
        })
      });
    }
    reader.readAsDataURL(file)
  };

  handleChange = (e) => {
    console.log(`${e.target.name}` ,e.target.value);
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields })
  };

  handleCheckbox = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: !e.target.checked };
    this.setState({ fields: newFields })
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const add = this.state.fields.address.split(" ").join("+")
    // GEOCODE API and POPULAR LAT/LNG
    adapter.latlng(add).then(coord => {
      const newFields = { ...this.state.fields, lat: coord.results[0].geometry.location.lat,
      lng: coord.results[0].geometry.location.lng};

      this.setState({ fields: newFields }, () => {
        const data = this.state.fields
        this.props.loginNewUser(data, this.props.history);
      })
    });
  };

  render() {
    console.log(this.state.fields);
    let me;
    this.state.imagePreviewUrl ? me = <Image border style={{width:"100px"}}
      id="profilePic" src={this.state.imagePreviewUrl}/> : "NO IMAGE"
    let yesHost;
    this.state.fields.is_host ? yesHost = <div className="ui field">
      <label>Description</label>
      <input
        type="text"
        name="description"
        placeholder="host description"
        // value={fields.username}
        onChange={this.handleChange}
      />
    </div> : ""

    return(
      <div className="ui form signup">
        <form onSubmit={this.handleSubmit}>
          <h2 style={{fontFamily: "Nunito, sans-serif"}}><center>Sign Up</center></h2>
          <Info handleCheckbox={this.handleCheckbox}/>
          <label htmlFor="notHost">Not a Host</label>
          {/* IMAGE UPLOAD*/}
          <div className="ui field">
            <label>Upload Profile Pic</label>
            <input type="file" name="img" id="img" accept="image/*" onChange={this.handleFileChange}/>
          </div>
          {me}
          <div className="ui field">
            <label>Username</label>
            <input
              name="username"
              required
              placeholder="username"
              // value={fields.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="ui field">
            <label>Full Name</label>
            <input
              name="full_name"
              placeholder="full name"
              // value={fields.full_name}
              onChange={this.handleChange}
            />
          </div>
          <div className="ui field">
            <label>Address</label>
            <input type="text" name="address" placeholder="ex: 55 w 14th st New York, NY" onChange={this.handleChange} required/>
          </div>
          <div className="ui field">
            <label>Email</label>
            <input
              required
              name="email"
              type="email"
              placeholder="example@example.com"
              // value={fields.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="ui field">
            <label>Password</label>
            <input
              required
              type="password"
              name="password"
              placeholder="password"
              // value={fields.username}
              onChange={this.handleChange}
            />
          </div>
          {yesHost}
          <button type="submit" className="ui basic green button">Submit</button>
        </form>
      </div>
    )
  }
}

export default withRouter(connect(null, actions)(Signup));
