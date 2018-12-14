import React from 'react'

const MovieReviews = props => {

  const renderMovieReviews = () => props.reviews.map(review => {
    return (
      <div key={review.display_title + review.publication_date} className='review' style={{'border': 'solid grey 3px'}}>
        <h3>{review.display_title}</h3>
        <h4>{review.headline}</h4>
        <p>{review.summary_short}</p>
        <p>Opens {review.opening_date} | Reviewed: {review.publication_date}</p>
      </div>
    )
  })

  return (
    <div className='review-list'>
      {renderMovieReviews()}
    </div>
  )
}

export default MovieReviews
