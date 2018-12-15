import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}` + `&query=`;

// Code SearchableMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(URL + `${this.state.searchTerm}`)
    .then(r=>r.json()).then(p=> {
        this.setState( {
            reviews: p.results
          }, () => console.log(p.results))
        })

  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleChange} placeholder='search' value={this.state.searchTerm} />
        <button type='submit'>search</button>
      </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
