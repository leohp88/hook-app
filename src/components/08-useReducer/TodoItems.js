import React from "react";
import PropTypes from "prop-types";

export const TodoItems = ({ todo, i, handleToggle, handleDelete }) => {
  return (
    <li key={todo.id} className="list-group-item">
      <p
        className={`${todo.done && "complete"}`}
        onClick={() => handleToggle(todo.id)}
      >
        {i + 1}. {todo.desc}
      </p>
      <button
        className="btn btn-danger"
        onClick={() => {
          handleDelete(todo.id);
        }}
      >
        Borrar
      </button>
    </li>
  );
};

TodoItems.protoType = {
  todo: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
