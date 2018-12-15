import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}`

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  onFormSubmit = e => {
    e.preventDefault()
    fetch(`${URL}&query=${this.state.searchTerm}`).then(r => r.json()).then(data => {
      this.setState({
        reviews: data.results
      })
    })
  }

  onInputChange = e => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h1>Search Reviews</h1>
        <form onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search:</label>
            <input type="text" value={this.state.term} onChange={this.onInputChange} />
          </div>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}