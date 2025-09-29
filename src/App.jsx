import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setToInput] = useState("");

  const handleChange = (e) => {
    setToInput(e.target.value)
  }

  const handleRegister = () => {
    if (todoInput === "") return;

    const data = { key: uuidv4(), todo: todoInput }
    setTodoList(todoList => [...todoList, data]);

    setToInput('') // init
  }

  return (
    <>
      <h1>TODOLIST</h1>
      <div>
        <TodoInput onChange={handleChange} todoInput={todoInput} />
        <button onClick={handleRegister}>등록</button>
      </div>
      <TodoList todoList={todoList} />
    </>
  )
}

export default App
