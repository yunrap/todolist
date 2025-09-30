import EditableInput from "./EditableInput";
import { Todo } from "../types/todo";
import React from "react";
import { useTodoDispatch } from "../state/todo/TodoContext";
type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useTodoDispatch();

  return (
    <>
      <li>
        <label>
          <input
            type="checkbox"
            checked={todo.checkYn === "Y" ? true : false}
            onChange={() =>
              dispatch({ type: "TOGGLE_CHECK", payload: todo.id })
            }
          />
        </label>
        <button
          onClick={() => dispatch({ type: "TOGGLE_STAR", payload: todo.id })}
        >
          {todo.isStarred ? "⭐️" : "☆"}
        </button>

        <EditableInput
          value={todo.text}
          onSave={(newText: string) =>
            dispatch({
              type: "UPDATE_TEXT",
              payload: { id: todo.id, text: newText },
            })
          }
        />
        <button onClick={() => dispatch({ type: "DELETE", payload: todo.id })}>
          삭제
        </button>
      </li>
    </>
  );
};

export default React.memo(TodoItem);
