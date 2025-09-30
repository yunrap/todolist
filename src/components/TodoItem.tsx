import React from "react";
import EditableInput from "./EditableInput";

const TodoItem = ({
  todo,
  onClickDelete,
  onToggle,
  onToggleStar,
  onUpdateText,
}) => {
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

        <EditableInput
          value={todo.text}
          onSave={(newText) => onUpdateText(todo.id, newText)}
        />
        <button onClick={() => onClickDelete(todo.id)}>삭제</button>
      </li>
    </>
  );
};

export default React.memo(TodoItem);
