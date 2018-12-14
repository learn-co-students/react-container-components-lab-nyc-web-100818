import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {

  constructor() {
    super()
    this.state = {
      reviews: []
    }
    this.fetchLatestReviews()
  }

  fetchLatestReviews = () => {
    fetch(URL).then(r=>r.json()).then(r => {
      console.log(r)
      this.setState({ reviews: r.results })
    })
  }

  renderLatestMovies = () => {
    return <MovieReviews reviews={this.state.reviews} />
  }

  render() {
    return (
        <div className='latest-movie-reviews' style={{'margin':'1%','width': '48%', 'float': 'left' }}>
        <h1>Latest Movie Reviews Container</h1>
          {this.renderLatestMovies()}
        </div>
    )
  }
}
