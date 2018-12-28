// Code MovieReviews Here
import React from 'react'

 const MovieReviews = (props) => {

   
   return (
     <div className="review-list reviews">
      {props.reviews.map(review => <Review className="review" review={review} key={review.multimedia.src}/>)}
    </div>
  )


}

const Review = (props) => {
  return (
    <div >
      <div>{props.review.headline}</div>
      <div><a href={props.review.link.url}>Link to review</a></div>
    </div>
  )

}


export default MovieReviews;


