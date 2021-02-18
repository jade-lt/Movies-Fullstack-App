import React from "react";
import MovieForm from "./ MovieForm";
import List from "./List";
class MovieContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      moviesList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:9000/api/v1/movies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("movies reponse", response);
        return response.json();
      })
      .then((movieData) => {
        console.log("movieData:", movieData);
        this.setState({ moviesList: movieData.data });
      });
  }

  // Only to understand Lifescycle hooks as these methods are called at certain stages
  // and if you need to put any your own logic in here.
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    console.log("current state", this.state);
    return true;
  }

  // Only to understand Lifescycle hooks as these methods are called at certain stages
  // and if you need to put any your own logic in here.
  componentWillUpdate() {
    console.log("componentWillUpdate");
    console.log("current state", this.state);
    return true;
  }

  // Only to understand Lifescycle hooks as these methods are called at certain stages
  // and if you need to put any your own logic in here.
  componentDidUpdate() {
    console.log("componentDidUpdate");
    console.log("current state", this.state);
  }

  handleMovieFormSubmit = (title, genre, description) => {
    console.log("formValues:", title, genre);
    console.log("this:", this);
    // Read title and genre state and put in a temp variable which is Obj literal
    const newMovie = { genre: genre, title: title, description: description };
    // Create a new movies array variable which is a copy from movies state via ... operator
    const newMovies = [...this.state.moviesList];
    newMovies.push(newMovie);
    // Set the state for movies and pass the new movies array.
    this.setState({ moviesList: newMovies });

    fetch("http://localhost:9000/api/v1/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    }).then((response) => {
      console.log("response:", response);
    });
  };

  render() {
    return (
      <div>
        <h1>Movies</h1>
        <List movies={this.state.moviesList} />
        <MovieForm submit={this.handleMovieFormSubmit} />
      </div>
    );
  }
}

export { MovieContainer };
