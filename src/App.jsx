import { useCallback, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleAdd = (value) => {
    const data = { id: uuidv4(), text: value };
    setTodoList((todoList) => [...todoList, data]);
  };

  const handleClickDelete = useCallback((id) => {
    console.log(id);
    setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
  }, []);

  return (
    <>
      <h1>TODOLIST</h1>
      <div>
        <TodoInput onAdd={handleAdd} />
      </div>
      <TodoList todoList={todoList} onClickDelete={handleClickDelete} />
    </>
  );
}

export default App;
