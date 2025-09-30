import { useTodoState } from "../state/todo/TodoContext";
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useTodoState();
  const sortedTodoList = [...todos].sort((a, b) => {
    return Number(b.isStarred === true) - Number(a.isStarred === true);
  });

  return (
    <ul>
      {sortedTodoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
