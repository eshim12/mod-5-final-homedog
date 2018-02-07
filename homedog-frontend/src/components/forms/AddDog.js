import React from 'react';

class AddDog extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      img: '',
      img_file_name: "",
      imagePreviewUrl: ""
    }
  };

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
        this.setState({
          img: imgTag.src
        })
      });
    }
    reader.readAsDataURL(file)

  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault()
    const {name, description, img} = this.state

    this.props.addPet({name, description, img,  pet_owner_id: this.props.me.id})
    this.setState({
      name: "",
      description: ""
    })
  }

  render(){
    console.log("do i have a blob", this.state.img)
    let me;
    this.state.imagePreviewUrl ? me = <img style={{width:"100px", "border-style": "solid"}}
      id="profilePic" src={this.state.imagePreviewUrl}/> : "NO IMAGE"
    return(
      <div className="ui form pet">
        <form onSubmit={this.handleSubmit}>
          <label>Upload Pet Pic</label>
          <input type="file" name="img" id="img" accept="image/*" onChange={this.handleFileChange}/>
          {me}
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
