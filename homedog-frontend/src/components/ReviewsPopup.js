import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import ReviewCard from './detailCards/ReviewCard'

const ReviewsPopup = ({user, start_date, end_date, confirmSitter}) => {
  console.log("in review popup");

  return (
    <Modal
      trigger={<Button className="ui basic green button">Reviews</Button>}>
      <Modal.Header>Reviews</Modal.Header>
      <Modal.Description>
        {user.host_reservations.length === 0 ?
          <div>no reviews yet!</div>
        :
        user.host_reservations.map((rsr, i) => rsr.review ? <ReviewCard user={user} rsr={rsr}/> : null)}

      </Modal.Description>
    </Modal>
  )
}


export default ReviewsPopup


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
