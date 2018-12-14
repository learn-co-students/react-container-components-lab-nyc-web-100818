import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  fetchSearchedReviews = () => {
    fetch(`${URL}&query=${this.state.searchTerm}`).then(r=>r.json()).then(r => {
      console.log(r)
      this.setState({ reviews: r.results })
    })
  }

  renderSearchedMovies = () => {
    return <MovieReviews reviews={this.state.reviews} />
  }

  searchMovies = event => {
    event.preventDefault()
    this.fetchSearchedReviews()
  }

  render() {
    return (
        <div className='searchable-movie-reviews' style={{'margin':'1%','width': '48%', 'float': 'left' }}>
          <h1>Searchable Movie Reviews Container</h1>
          <form onSubmit={this.searchMovies}>
            <input type="text" onChange={ e => this.setState({ searchTerm: e.target.value })} value={this.state.searchTerm} />
            <br/>
            <input type="submit"/>
          </form>
          {this.renderSearchedMovies()}
        </div>
    )
  }
}
