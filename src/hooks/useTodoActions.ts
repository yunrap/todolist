import { Todo } from "@/types/todo";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useEffect, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export type TodoAction =
  | { type: "ADD"; payload: Todo }
  | { type: "DELETE"; payload: string }
  | { type: "TOGGLE_CHECK"; payload: string }
  | { type: "TOGGLE_STAR"; payload: string }
  | { type: "UPDATE_TEXT"; payload: { id: string; text: string } };

export type TodoState = Todo[];
export const initialState: TodoState = [];

export function todoReducer(state: Todo[], action: TodoAction): TodoState {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    case "TOGGLE_CHECK":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, checkYn: todo.checkYn === "Y" ? "N" : "Y" }
          : todo
      );
    case "TOGGLE_STAR":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isStarred: !todo.isStarred }
          : todo
      );
    case "UPDATE_TEXT":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    default:
      return state;
  }
}
export const useTodoActions = (initialTodos: TodoState = []) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState("");
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    setIds((prev) => {
      const currentIds = todos.map((todo) => todo.id);
      const newIds = currentIds.filter((id) => !prev.includes(id));
      const filteredPrev = prev.filter((id) => currentIds.includes(id));
      return [...filteredPrev, ...newIds];
    });
  }, [todos]);

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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setIds((prev) => {
        const oldIndex = prev.indexOf(String(active.id));
        const newIndex = prev.indexOf(String(over.id));
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  const sortedTodos = ids.map((id) => todos.find((t) => t.id === id)!);

  return {
    todos: sortedTodos,
    input,
    handleChangeValue,
    handleAdd,
    handleDelete,
    handleCheck,
    handleUpdateValue,
    handleToggleStar,
    handleDragEnd,
  };
};
