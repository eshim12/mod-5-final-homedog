import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

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
        address: ""
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
    const data = this.state.fields
    this.props.loginNewUser(data, this.props.history);
  };

  render() {
    console.log("do i have a blob", this.state.fields.blob);
    let me;
    this.state.imagePreviewUrl ? me = <img style={{width:"100px", "border-style": "solid"}}
      id="profilePic" src={this.state.imagePreviewUrl}/> : "NO IMAGE"
    let yesHost;
    this.state.fields.is_host ? yesHost = <div className="ui field">
      <label>Description</label>
      <textarea
        name="description"
        placeholder="host description"
        // value={fields.username}
        onChange={this.handleChange}
      />
    <label>Address</label>
    <input type="text" name="address" placeholder="address" onChange={this.handleChange}/>
    </div> : ""

    return(
      <div className="ui form signup">
        <form onSubmit={this.handleSubmit}>
          <h2 style={{"font-family": "Nunito, sans-serif"}}><center>Sign Up</center></h2>
          <input onChange={this.handleCheckbox} type="checkbox" id="notHost" name="is_host" value="notHost"/>
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
            <label>Email</label>
            <input
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
