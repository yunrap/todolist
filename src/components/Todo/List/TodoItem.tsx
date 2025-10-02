import { Todo } from "@/types/todo";
import EditableInput from "../common/EditableInput";
import React from "react";
import { Button } from "@/components/ui/button";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import DragHandleIcon from "@/components/icons/DragHandleIcon";
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
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: todo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      style={style}
      className="text-left grid items-center grid-cols-[1fr_1fr_1fr_20fr_3fr] gap-4"
    >
      <button ref={setNodeRef} {...attributes} {...listeners}>
        <DragHandleIcon />
      </button>
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
