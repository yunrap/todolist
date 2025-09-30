import { useCallback, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleAdd = (value: string) => {
    const data: Todo = {
      id: uuidv4(),
      text: value,
      checkYn: "N",
      isStarred: false,
    };
    setTodoList((todoList) => [...todoList, data]);
  };

  const handleClickDelete = useCallback((id: string) => {
    setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
  }, []);

  const handleToggle = (id: string) => {
    console.log(id);
    setTodoList((prevList) =>
      prevList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              checkYn: todo.checkYn === "Y" ? "N" : "Y",
            }
          : todo
      )
    );
  };

  const handleToggleStar = (id: string) => {
    setTodoList((prevList) =>
      prevList.map((todo) =>
        todo.id === id ? { ...todo, isStarred: !todo.isStarred } : todo
      )
    );
  };

  const onUpdateText = (id: string, value: string) => {
    console.log(id, value);
    setTodoList((prevList) =>
      prevList.map((todo) => (todo.id === id ? { ...todo, text: value } : todo))
    );
  };

  const sortedTodoList = [...todoList].sort((a, b) => {
    return Number(b.isStarred === true) - Number(a.isStarred === true);
  });

  return (
    <>
      <h1>TODOLIST</h1>
      <div>
        <TodoInput onAdd={handleAdd} />
      </div>
      <TodoList
        todoList={sortedTodoList}
        onClickDelete={handleClickDelete}
        onToggle={handleToggle}
        onToggleStar={handleToggleStar}
        onUpdateText={onUpdateText}
      />
    </>
  );
}

export default App;
