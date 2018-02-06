import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const SitterPopup = ({user, start_date, end_date, confirmSitter}) => {
  console.log("in popup");

  return (
    <Modal
      trigger={<Button className="ui basic green button">Book Sitter</Button>}>
      <Modal.Header>Confirm Sitter</Modal.Header>
      <Modal.Description>
        <h3>Do you want to book {user.username} from {start_date} to {end_date}?</h3>
      </Modal.Description>
      <Modal.Actions>
          <Button
            className="ui basic green button"
            icon='check' content='Confirm Sitter' onClick={
              ()=>
              confirmSitter({
                start_date, end_date, host_id: parseInt(user.id)})} />
        </Modal.Actions>
    </Modal>
  )
}


export default SitterPopup


// <div className="ui modal">
//   <i className="close icon"></i>
//   <div className="header">
//     Profile Picture
//   </div>
//   <div className="image content">
//     <div className="ui medium image">
//       <img src="/images/avatar/large/chris.jpg"/>
//     </div>
//     <div className="description">
//       <div className="ui header">Weve auto-chosen a profile image for you.</div>
//       <p>Weve grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
//       <p>Is it okay to use this photo?</p>
//     </div>
//   </div>
//   <div className="actions">
//     <div className="ui black deny button">
//       Nope
//     </div>
//     <div className="ui positive right labeled icon button">
//       Yep, thats me
//       <i className="checkmark icon"></i>
//     </div>
//   </div>
// </div>
