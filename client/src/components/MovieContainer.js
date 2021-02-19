import React, { useEffect, useState } from "react";
import MovieForm from "./ MovieForm";
import List from "./List";
class MovieContainer extends React.Component {
  constructor() {
    super();
    // initialise
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
        // call to set state
        this.setState({ moviesList: movieData.data });
      });
  }

  handleMovieFormSubmit = (title, genre, description) => {
    console.log("using classes: formValues:", title, genre);
    console.log("using classes: this:", this);
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

const FunctionalMovieContainer = () => {
  // Initialise state variables using hooks
  const [moviesList, setMoviesList] = useState([]);
  const [userName, setUserName] = useState("")

  useEffect(() => {
    console.log("USE EFFECT WAS CALLED")
  })


  useEffect(() => {
    
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
        setMoviesList(movieData.data)
        // call to set state
        // this.setState({ moviesList: movieData.data });
      });
  })

  return (
    <div>
      <h1>Movies</h1>
      <List movies={moviesList} />
      <MovieForm submit={() => console.log("ash")} />
    </div>
  );
};

export { MovieContainer, FunctionalMovieContainer };
