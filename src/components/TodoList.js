import React, { useState } from "react";
import { AiFillCheckSquare, AiOutlineBorder } from "react-icons/ai";

const TodoList = ({ todo, dispatch }) => {
  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState(todo.inputValue);
  return (
    <div
      style={{
        backgroundColor: "brown",
        margin: "20px",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        {editMode ? (
          <form
            onSubmit={() => setEditMode(false)}
            style={{ display: "inline" }}
          >
            <input
              type="text"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              style={{ padding: "10px" }}
            ></input>
          </form>
        ) : (
          <span>{editContent}</span>
        )}
      </div>

      <div>
        {todo.complete ? (
          <AiFillCheckSquare
            color="green"
            size={30}
            style={{ marginBottom: "-10px" }}
            onClick={() =>
              dispatch({ type: "mark_Todo", payload: { id: todo.id } })
            }
          ></AiFillCheckSquare>
        ) : (
          <AiOutlineBorder
            color="red"
            size={30}
            style={{ marginBottom: "-10px" }}
            onClick={() =>
              dispatch({ type: "mark_Todo", payload: { id: todo.id } })
            }
          ></AiOutlineBorder>
        )}

        {/* <button style={{}}
        onClick={() =>
          dispatch({ type: "mark_Todo", payload: { id: todo.id } })
        }
      >
        {todo.complete ? "completed" : "not completed"}
      </button> */}
        <button
          style={{ padding: "5px", margin: "5px" }}
          onClick={() =>
            dispatch({ type: "delete_Todo", payload: { id: todo.id } })
          }
        >
          Delete
        </button>

        <button
          style={{ padding: "5px", margin: "5px" }}
          onClick={() => setEditMode(true)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default TodoList;
