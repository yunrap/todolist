import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./state/todo/TodoContext";

function App() {
  return (
    <>
      <TodoProvider>
        <h1>TODOLIST</h1>
        <div>
          <TodoInput />
        </div>
        <TodoList />
      </TodoProvider>
    </>
  );
}

export default App;
