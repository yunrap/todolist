import TodoItem from "./TodoItem";

const TodoList = ({ todoList, onClickDelete }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onClickDelete={onClickDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
