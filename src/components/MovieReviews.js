// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => {
  return (
    <div className='review-list'>
      {props.reviews.map( (review, i) => <Review key={i} review={review} />)}
    </div>
  )
}

const Review = props => {
  return (
    <div className="review">
      <p>{props.review.display_title}</p>
      <p>{props.review.publication_date}</p>
    </div>
  )
}

export default MovieReviews
