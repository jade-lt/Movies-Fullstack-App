import React from "react";

class MovieForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      genre: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    this.props.submit(
      this.state.title,
      this.state.genre,
      this.state.description
    );
  };
  render() {
    return (
      <div>
        <h2>Add Movie</h2>
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
          <label>
            Description
            <input
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            ></input>
          </label>
          <button type="submit">Add Movie</button>
        </form>
      </div>
    );
  }
}

export default MovieForm;
