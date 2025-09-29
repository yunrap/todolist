const TodoInput = ({ onChange, todoInput }) => {
    return (<input value={todoInput} onChange={onChange}></input>)
}

export default TodoInput