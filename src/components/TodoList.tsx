import { Todo } from "@/types/todo";
import TodoItem from "./TodoItem";
type TodoListProps = {
  todos: Todo[];
  onDelete: (id: string) => void;
  onCheck: (id: string) => void;
  onUpdateValue: (newText: string, id: string) => void;
  onToggleStar: (id: string) => void;
};

const TodoList = ({
  todos,
  onDelete,
  onCheck,
  onUpdateValue,
  onToggleStar,
}: TodoListProps) => {
  const sortedTodoList = [...todos].sort((a, b) => {
    return Number(b.isStarred === true) - Number(a.isStarred === true);
  });

  return (
    <ul className="py-10 flex flex-col gap-6 ">
      {sortedTodoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onCheck={onCheck}
          onUpdateValue={onUpdateValue}
          onToggleStar={onToggleStar}
        />
      ))}
    </ul>
  );
};

export default TodoList;
