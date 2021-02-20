import React, { useState, useEffect } from "react";
import { MovieForm } from "./ MovieForm";
import { List } from "./List";

const FunctionalMovieContainer = () => {
  const [moviesList, setMoviesList] = useState([]);

  const handleMovieFormSubmit = (title, genre, description) => {
    const newMovie = { genre: genre, title: title, description: description };
    const newMovies = [...moviesList];
    newMovies.push(newMovie);
    setMoviesList(newMovies);

    fetch("http://localhost:9000/api/v1/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    }).then((response) => {
      console.log("use clases: response:", response);
    });
  };

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
        // call to set state
        setMoviesList(movieData.data);
      });
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <List movies={moviesList} />
      <MovieForm submit={handleMovieFormSubmit} />
    </div>
  );
};

export { FunctionalMovieContainer };
