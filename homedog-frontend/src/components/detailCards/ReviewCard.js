import React from 'react'
import { Rating } from 'semantic-ui-react'

const ReviewCard = ({rsr}) => {
  console.log("any reviews?", rsr.review.rating);
  return(
    <div>
      <Rating icon="star" defaultRating={rsr.review.rating} maxRating={4} disabled/>
      <p>{rsr.review.content}</p>
    </div>
  )
}

export default ReviewCard
