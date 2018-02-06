import React from 'react';

class AddDog extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: ''
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault()
    const {name, description} = this.state

    this.props.addPet({name, description, pet_owner_id: this.props.me.id})
    this.setState({
      name: "",
      description: ""
    })
  }

  render(){
    return(
      <div className="ui form pet">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            placeholder="name"
            name="name" type='text'/>
          <textarea
            onChange={this.handleChange}
            placeholder="description" name="description" />
          <button
            type="submit"
            className="ui basic green button">Add Dog</button>
        </form>
      </div>
    )
  }
}


export default AddDog
