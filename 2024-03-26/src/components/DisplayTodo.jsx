import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/todoSlice";

const DisplayTodo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const handleUpdateTodo = (id) => {
    const updatedText = prompt("Enter updated todo text:");
    if (updatedText !== null && updatedText !== "") {
      dispatch(updateTodo({ id, text: updatedText }));
    }
  };

  return (
    <div>
      {todos.map((todo) => (
        <div className="todo-item" key={todo.id}>
          <div className="todo-text">{todo.text}</div>
          <div className="button-container">
            <button
              className="delete-button"
              onClick={() => handleDeleteTodo(todo.id)}>
              Delete
            </button>
            <button
              className="update-button"
              onClick={() => handleUpdateTodo(todo.id)}>
              Update
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayTodo;
