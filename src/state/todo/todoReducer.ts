import { Todo } from "../../types/todo";

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
