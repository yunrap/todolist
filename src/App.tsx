import "./App.css";
import ThemeToggle from "./components/Todo/common/ThemeToggle";
import TodoContainer from "./components/Todo/TodoContainer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* header */}
        <header>
          <ThemeToggle />
          <h1 className="py-10 text-7xl text-yellow-400">Todolist</h1>
        </header>
        {/* main */}
        <main>
          <TodoContainer />
        </main>
      </div>
    </>
  );
}

export default App;
