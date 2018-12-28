import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
  + `api-key=${NYT_API_KEY}` + `&query=`;
// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {


  state = {
    reviews: [],
    searchTerm: ""
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit= (e) => {
    e.preventDefault()
    fetch(URL +this.state.searchTerm).then(resp => resp.json())
      .then(response => this.setState({reviews: response.results}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" value={this.state.earchTerm}/>
          <button>Search for Movie</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;;