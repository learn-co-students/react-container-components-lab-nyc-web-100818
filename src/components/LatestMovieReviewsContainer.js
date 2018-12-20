import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  //initialize state with prop reviews that is an empty array
  state = {
    reviews: []
  };

  // Make an fetch to the API and use setState to update our state with the returned parsed data

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        // console.table(data.results);
        this.setState({ reviews: data.results });
      });
  }
  //The LatestMovieReviewsContainer should have a top-level wrapping element with class latest-movie-reviews.
  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Reviews:</h1>
        {/* passing down the state to the child MovieReviews so it has the data from the API available for rendering */}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
export default LatestMovieReviewsContainer;
