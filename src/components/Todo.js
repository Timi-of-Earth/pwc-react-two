import React, { useReducer, useState, useEffect } from "react";
import TodoList from "./TodoList";

const reducer = (todos, action) => {
  switch (action.type) {
    case "add_Todo":
      return [...todos, newTodo(action.payload.inputValue)];

    case "mark_Todo":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    case "delete_Todo":
      return todos.filter((todo) => todo.id !== action.payload.id);

    // case "edit_Todo":
    //   return todos.map((todo) => {
    //     if (todo.id === action.payload.id) {
    //       return { ...todo, complete: !todo.complete };
    //     }
    //     return todo;
    //   });

    default:
      return todos;
  }
};

const newTodo = (value) => {
  return { id: Date.now(), inputValue: value, completed: false };
};

const Todo = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add_Todo", payload: { inputValue: input } });
    localStorage.setItem("todos", JSON.stringify(todos));
    setInput("");
  };

  useEffect(
    () => localStorage.setItem("todos", JSON.stringify(todos)),
    [todos]
  );

  return (
    <div>
      <h1>My Todo App</h1>
      <div
        className="form-warapper"
        style={{
          width: "500px",
          backgroundColor: "beige",
          margin: "auto",
          padding: "20px",
        }}
      >
        <form onSubmit={handleSubmit} style={{ padding: "10px" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ width: "200px", padding: "10px" }}
          ></input>
        </form>

        {todos.map((todo) => {
          return <TodoList key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </div>
    </div>
  );
};

export default Todo;
