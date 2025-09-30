import EditableInput from "./EditableInput";
import { Todo } from "../types/todo";
import React from "react";
type TodoItemProps = {
  todo: Todo;
  onClickDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onToggleStar: (id: string) => void;
  onUpdateText: (id: string, value: string) => void;
};

const TodoItem = ({
  todo,
  onClickDelete,
  onToggle,
  onToggleStar,
  onUpdateText,
}: TodoItemProps) => {
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
          onSave={(newText: string) => onUpdateText(todo.id, newText)}
        />
        <button onClick={() => onClickDelete(todo.id)}>삭제</button>
      </li>
    </>
  );
};

export default React.memo(TodoItem);
