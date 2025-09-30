import TodoItem from "./TodoItem";

type TodoListProps = {
  todoList: Todo[];
  onClickDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onToggleStar: (id: string) => void;
  onUpdateText: (id: string, value: string) => void;
};

const TodoList = ({
  todoList,
  onClickDelete,
  onToggle,
  onToggleStar,
  onUpdateText,
}: TodoListProps) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onClickDelete={onClickDelete}
          onToggle={onToggle}
          onToggleStar={onToggleStar}
          onUpdateText={onUpdateText}
        />
      ))}
    </ul>
  );
};

export default TodoList;
