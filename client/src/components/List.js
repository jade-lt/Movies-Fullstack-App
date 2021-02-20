import React from "react";

const List = (props) => {
    return (
      <ul>
        {props.movies.map((el, index) => (
          <li key={index}>
            Title: {el.title} // Genre: {el.genre} // Description: {el.description}
          </li>
        ))}
      </ul>
    );
  }

export { List };
