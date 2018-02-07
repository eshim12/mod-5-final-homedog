import React from 'react'

const ReviewCard = ({rsr}) => {
  console.log("any reviews?", rsr);
  return(
    <div>
      <p>{rsr.review.content}</p>
    </div>
  )
}

export default ReviewCard
