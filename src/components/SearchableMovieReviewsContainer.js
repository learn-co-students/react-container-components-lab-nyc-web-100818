import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "f98593a095b44546bf4073744b540da0";
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  // SearchableMovieReviewsContainer hold its own state with reviews array and a searchTerm string as props in the state object
  state = {
    reviews: [],
    searchTerm: ""
  };

  // for a search through a form we want to have to have two distinct event handlers
  // define the event handlers as arrow functions and pass them as callback to the JSX elements we specify (the form and the input)
  // 1. onFormSubmit - for handling form submit event
  // 2. onInputChange - for change in the input field, we want to have access to the value of the input

  onFormSubmit = event => {
    console.log(event);
    // This is a form so we invoke preventDefault!
    event.preventDefault();
    // Handler logic => we want to make a fetch and query the API for the search term
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(r => r.json())
      .then(data =>
        this.setState({
          reviews: data.results
        })
      );
  };

  // We are using controlled form to get the user input and passing that to setState to update our state object and re-render the component => we have access to the user data and our component/state is getting updated!
  // For this to work we must also use value={this.state.attribute} to set the prop of the input element to our state => in SYNC!

  onInputChange = event => {
    // console.log(event.target.value);
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h1>Search Reviews</h1>
        <form onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Term:</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            />
          </div>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
