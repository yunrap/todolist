import React from "react";

const TodoItem = ({ todo, onClickDelete, onToggle, onToggleStar }) => {
  return (
    <>
      <li>
        <label>
          <input
            type="checkbox"
            checked={todo.checkYn === "Y" ? true : false}
            onChange={() => onToggle(todo.id)}
          />
        </label>
        <button onClick={() => onToggleStar(todo.id)}>
          {todo.isStarred ? "⭐️" : "☆"}
        </button>

        {todo.text}
        <button onClick={() => onClickDelete(todo.id)}>삭제</button>
      </li>
    </>
  );
};

export default React.memo(TodoItem);
