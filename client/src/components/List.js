import React from "react";

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.movies.map((el, index) => (
          <li key={index}>
            Title: {el.title} - Genre: {el.genre}
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
