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
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          <button onClick={() => handleUpdateTodo(todo.id)}>Update</button>
        </div>
      ))}
    </div>
  );
};

export default DisplayTodo;
