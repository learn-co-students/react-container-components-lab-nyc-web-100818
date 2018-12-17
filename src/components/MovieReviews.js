// Code MovieReviews Here
import React from 'react'
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer'

const MovieReviews = props => {

return (
  <div className="review-list">
    {props.reviews.map((e)=>{
      return <div className="review">
        {e.display_title}<br/> {e.critics_pick} <br/> {e.headline}<br/> {e.summary_short}
      </div>
    })}
  </div>
)

}

export default MovieReviews
