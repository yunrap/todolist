import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./state/todo/TodoContext";

function App() {
  return (
    <>
      <TodoProvider>
        <div className="flex flex-col min-h-screen">
          {/* header */}
          <header>
            <ThemeToggle />
            <h1 className="py-10 text-7xl text-yellow-400">Todolist</h1>
          </header>
          {/* main */}
          <main>
            <TodoInput />
            <TodoList />
          </main>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
