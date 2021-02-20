import React, { useState } from "react";

const MovieFormEdit = (props) => {
  // const [title, setTitle] = useState("");
  // const [genre, setGenre] = useState("");
  // const [description, setDescription] = useState("");
  // 1st element - > state Variable
  // 2nd element - > function to change that state variable

  const [formState, setFormState] = useState({
    genre: '',
    title: '',
    description: ''
  })

  // 1st element - > state Variable
  // 2nd element - > function to change that state variable

  const handleChange = (e) => {
    // console.log('formState', formState);
    const newState = { ...formState }
    newState[e.target.name] = e.target.value;
    // Alternate one line for the previous two lines
    // const newState = { ...formState, [e.target.name]: e.target.value }
    // console.log('newState', newState);
    setFormState(newState);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    // props.submit(formState.title, formState.genre, formState.description);
  };

  return (
    <div>
      <h2>Edit Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input name="title" value={props.movie.title} onChange={handleChange}></input>
        </label>
        <label>
          Genre
          <input name="genre" value={props.movie.genre} onChange={handleChange}></input>
        </label>
        <label>
          Description
          <input
            name="description"
            value={props.movie.description}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Edit Movie</button>
      </form>
    </div>
  );
};

export default MovieFormEdit;
