import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;
const NYT_SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='


class SearchableMovieReviewsContainer extends React.Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSearchSubmit = event => {
    event.preventDefault(),
    // console.log(this.state.searchTerm)
    fetch(`${NYT_SEARCH_URL}${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
    .then(res => res.json())
    .then(data => this.setState({
      reviews: data
    }))
  }



  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSearchSubmit}>
          <input value={this.state.searchTerm} onChange={this.handleSearch} />
          <button value="submit">Submit</button>
        </form>
        <div className="searchable-movie-found">
          <MovieReviews reviews={this.state.reviews.results} />
        </div>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
