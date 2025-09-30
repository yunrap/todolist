// state/TodoContext.tsx
import React, { createContext, useReducer, ReactNode, useContext } from "react";
import {
  todoReducer,
  initialState,
  TodoState,
  TodoAction,
} from "./todoReducer";

const TodoStateContext = createContext<TodoState | undefined>(undefined);
const TodoDispatchContext = createContext<
  React.Dispatch<TodoAction> | undefined
>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (!context)
    throw new Error("useTodoState must be used within TodoProvider");
  return context;
};

export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (!context)
    throw new Error("useTodoDispatch must be used within TodoProvider");
  return context;
};
