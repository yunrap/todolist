import EditableInput from "./EditableInput";
import { Todo } from "../types/todo";
import React from "react";
import { Button } from "./ui/button";
type TodoItemProps = {
  todo: Todo;
  onDelete: (id: string) => void;
  onCheck: (id: string) => void;
  onUpdateValue: (newText: string, id: string) => void;
  onToggleStar: (id: string) => void;
};

const TodoItem = ({
  todo,
  onDelete,
  onCheck,
  onUpdateValue,
  onToggleStar,
}: TodoItemProps) => {
  return (
    <li className="text-left grid items-center grid-cols-[1fr_1fr_20fr_1fr] gap-4">
      <label className="text-center">
        <input
          type="checkbox"
          checked={todo.checkYn === "Y" ? true : false}
          onChange={() => onCheck(todo.id)}
        />
      </label>
      <button onClick={() => onToggleStar(todo.id)}>
        {todo.isStarred ? "⭐️" : "☆"}
      </button>

      <EditableInput
        todo={todo}
        value={todo.text}
        onSave={(newText: string) => onUpdateValue(newText, todo.id)}
      />
      <Button onClick={() => onDelete(todo.id)}>삭제</Button>
    </li>
  );
};

export default React.memo(TodoItem);
