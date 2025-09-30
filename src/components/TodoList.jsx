import TodoItem from "./TodoItem";

const TodoList = ({ todoList, onClickDelete, onToggle, onToggleStar }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onClickDelete={onClickDelete}
          onToggle={onToggle}
          onToggleStar={onToggleStar}
        />
      ))}
    </ul>
  );
};

export default TodoList;
