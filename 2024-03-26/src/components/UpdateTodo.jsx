import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "../redux/todoSlice";

const UpdateTodo = ({ match }) => {
  const todoId = match.params.id;
  const todo = useSelector((state) => state.todos.find((t) => t.id === todoId));
  const [updatedTodo, setUpdatedTodo] = useState(todo.text);
  const dispatch = useDispatch();

  const handleUpdateTodo = () => {
    dispatch(updateTodo({ id: todoId, text: updatedTodo }));
  };

  return (
    <div>
      <input
        type="text"
        value={updatedTodo}
        onChange={(e) => setUpdatedTodo(e.target.value)}
      />
      <button onClick={handleUpdateTodo}>Update</button>
    </div>
  );
};

export default UpdateTodo;
