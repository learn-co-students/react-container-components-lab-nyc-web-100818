// Code MovieReviews Here

import React from "react";

// MovieReviews will take in one prop => reviews, which is available to us in the state that's being held by LatestMovieReviewsContainer.js
// MovieReviews is the presentational component. And is responsible for solely rendering UI content
const MovieReviews = props => {
  // console.log(props.reviews);

  //mapping through our props.reviews collection and rendering each element
  const reviewList = props.reviews.map(review => {
    return (
      <div className="review" key={review.display_title}>
        {review.display_title}
      </div>
    );
  });

  return <div className="review-list">{reviewList}</div>;
};

export default MovieReviews;
