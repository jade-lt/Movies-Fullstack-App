import React from "react";

const List = (props) => {
  return (
    <ul>
      {props.movies.map((el, index) => (
        <li key={index} onClick={() => props.handleClick(index)}>
          Title: {el.title} // Genre: {el.genre} // Description: {el.description}
        </li>
      ))}
    </ul>
  );
};



export { List };
