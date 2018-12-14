import React from 'react';
import PropTypes from 'prop-types'

const MovieReview = ({display_title, headline, byline}) => {
  return (
    <div className="review">
      <h3>{display_title}</h3>
      <h3>{headline}</h3>
      <h5>Written by: {byline}</h5>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map(review => <MovieReview
        display_title={review.display_title}
        byline={review.byline}
        headline={review.headline}
        />)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
