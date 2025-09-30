import EditableInput from "./EditableInput";
import { Todo } from "../types/todo";
import React from "react";
import { useTodoDispatch } from "../state/todo/TodoContext";
import { Button } from "./ui/button";
type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useTodoDispatch();

  return (
    <li className="text-left grid items-center grid-cols-[1fr_1fr_20fr_1fr] gap-4">
      <label className="text-center">
        <input
          type="checkbox"
          checked={todo.checkYn === "Y" ? true : false}
          onChange={() => dispatch({ type: "TOGGLE_CHECK", payload: todo.id })}
        />
      </label>
      <button
        onClick={() => dispatch({ type: "TOGGLE_STAR", payload: todo.id })}
      >
        {todo.isStarred ? "⭐️" : "☆"}
      </button>

      <EditableInput
        todo={todo}
        value={todo.text}
        onSave={(newText: string) =>
          dispatch({
            type: "UPDATE_TEXT",
            payload: { id: todo.id, text: newText },
          })
        }
      />
      <Button onClick={() => dispatch({ type: "DELETE", payload: todo.id })}>
        삭제
      </Button>
    </li>
  );
};

export default React.memo(TodoItem);
