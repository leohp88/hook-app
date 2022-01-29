import React from "react";
import PropTypes from "prop-types";
import { useForm } from "../../hooks/useForm";

export const TodoAgregar = ({ handleToggle }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) return;

    const newTarea = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleToggle(newTarea);
    reset();
  };
  return (
    <>
      <h4>Agregar TODO</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="description"
          placeholder="Aprender ..."
          autoComplete="off"
          onChange={handleInputChange}
          value={description}
        />
        <button
          type="submit"
          className="btn btn-outline-primary mt-3 form-control"
        >
          Agregar
        </button>
      </form>
    </>
  );
};

TodoAgregar.protoType = {
  handleToggle: PropTypes.func.isRequired,
};
