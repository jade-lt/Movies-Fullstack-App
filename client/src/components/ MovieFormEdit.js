import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    setFormState(props.movie)
    console.log('useEffect edit')
  }, [props.movie]);

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
    props.submit(formState);
  };

  return (
    <div>
      <h2>Edit Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input name="title" value={formState.title} onChange={handleChange}></input>
        </label>
        <label>
          Genre
          <input name="genre" value={formState.genre} onChange={handleChange}></input>
        </label>
        <label>
          Description
          <input
            name="description"
            value={formState.description}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Edit Movie</button>
      </form>
    </div>
  );
};

export { MovieFormEdit };
