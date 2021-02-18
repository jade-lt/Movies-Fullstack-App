import React from "react";

class MoviesList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { title: "X-men", genre: "Fantasy" },
        { title: "Start Trek", genre: "Science Fiction" },
      ],
      title: "",
      genre: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // new state value
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Read title and genre state and put in a temp variable which is Obj literal
    const newMovie = { genre: this.state.genre, title: this.state.title };
    // Create a new movies array variable which is a copy from movies state via ... operator
    const newMovies = [...this.state.movies];
    newMovies.push(newMovie);
    // Set the state for movies and pass the new movies array.
    this.setState({ movies: newMovies });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <input
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Genre
            <input
              name="genre"
              value={this.state.genre}
              onChange={this.handleChange}
            ></input>
          </label>
          <button type="submit">Add Movie</button>
        </form>
        <ul>
          {this.state.movies.map((el, index) => (
            <li key={index}>
              Title: {el.title} - Genre: {el.genre}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MoviesList;
