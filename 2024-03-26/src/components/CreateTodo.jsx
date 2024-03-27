import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const CreateTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo({ text: todo }));
    setTodo("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default CreateTodo;
