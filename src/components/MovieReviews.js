import React from 'react'

const MovieReviews = ({reviews}) => {
  console.log(reviews)
  const reviewItems = reviews.map(review => {
    return <div key={review.display_title} className="review">{review.display_title}</div>
  })

  return (
    <div className="review-list">
      {reviewItems}
    </div>
  )
}

export default MovieReviews