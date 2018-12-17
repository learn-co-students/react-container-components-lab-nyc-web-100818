import React, { Component, Fragment } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}` + `&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component{
  state = {
      reviews: [],
      searchTerm: ""
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    fetch(URL + `${this.state.searchTerm}>?`)
    .then(r=> r.json())
    .then(data=> {
      console.log(data);
        this.setState({reviews: data.results})
    })
  }

  handleChange=(e)=>{
    this.setState(...this.state, {searchTerm: e.target.value})
  }

  componentDidMount(){
    fetch(`${URL}`).then(r=> r.json())
    .then(data=> {
        this.setState({reviews: data.results})
    })
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="search" onChange={this.handleChange}/>
          <button> Submit</button>
        </form>
          <div className="latest-movie-reviews"><MovieReviews reviews={this.state.reviews}/></div>
      </div>
    )
  }
}



export default SearchableMovieReviewsContainer
