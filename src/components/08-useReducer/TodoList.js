import React from "react";
import PropTypes from "prop-types";
import { TodoItems } from "./TodoItems";

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, i) => {
        return (
          <TodoItems
            key={todo.id}
            todo={todo}
            i={i}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
};

TodoList.protoTypes = {
  todos: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
