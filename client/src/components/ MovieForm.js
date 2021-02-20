import React, { useState } from "react";

const MovieForm = (props) => {
  // const [title, setTitle] = useState("");
  // const [genre, setGenre] = useState("");
  // const [description, setDescription] = useState("");
  const [formState, setFormState] = useState({
    title: "",
    genre: "",
    description: "",
  });

  const handleChange = (e) => {
    const newState = { ...formState };
    newState[e.target.name] = e.target.value;
    console.log("newstate:", newState);
    console.log("formstate:", formState);
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    props.submit(formState.title, formState.genre, formState.description);
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            name="title"
            value={formState.title}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Genre
          <input
            name="genre"
            value={formState.genre}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Description
          <input
            name="description"
            value={formState.description}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export { MovieForm };
