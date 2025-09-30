import TodoItem from "./TodoItem";

const TodoList = ({
  todoList,
  onClickDelete,
  onToggle,
  onToggleStar,
  onUpdateText,
}) => {
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
