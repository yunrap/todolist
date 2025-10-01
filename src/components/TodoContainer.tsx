import { useTodoDispatch, useTodoState } from "@/state/todo/TodoContext";
import TodoPresenter from "./TodoPresenter";
import { useState } from "react";
import { Todo } from "@/types/todo";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
  const dispatch = useTodoDispatch();
  const todos = useTodoState();
  const [input, setInput] = useState("");

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleAdd = () => {
    if (!input.trim()) return;

    const newTodo: Todo = {
      id: uuidv4(),
      text: input,
      checkYn: "N",
      isStarred: false,
    };

    dispatch({ type: "ADD", payload: newTodo });
    setInput("");
  };

  const handleDelete = (id: string) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const handleCheck = (id: string) => {
    dispatch({ type: "TOGGLE_CHECK", payload: id });
  };

  const handleUpdateValue = (newText: string, id: string) => {
    dispatch({
      type: "UPDATE_TEXT",
      payload: { id: id, text: newText },
    });
  };

  const handleToggleStar = (id: string) => {
    dispatch({ type: "TOGGLE_STAR", payload: id });
  };

  return (
    <>
      <TodoPresenter
        todos={todos}
        input={input}
        onChangeValue={handleChangeValue}
        onUpdateValue={handleUpdateValue}
        onAdd={handleAdd}
        onDelete={handleDelete}
        onCheck={handleCheck}
        onToggleStar={handleToggleStar}
      />
    </>
  );
};

export default TodoContainer;
