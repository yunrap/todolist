import TodoItem from "./TodoItem";

const TodoList = ({ todoList }) => {
    return (
        <ul>
            {todoList.map((todo) => (<TodoItem key={todo.key} todo={todo.todo} />))}
        </ul>
    )
}

export default TodoList