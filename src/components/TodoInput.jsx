import React, { useState } from "react";

const TodoInput = (props) => {
  const [todoText, setTodoText] = useState("");
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
        value={todoText}
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(todoText);
          setTodoText("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default TodoInput;
