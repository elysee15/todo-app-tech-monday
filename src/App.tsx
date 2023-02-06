import "./App.css";
import AddTodo from "./components/todo/add-todo";
import TodoList from "./components/todo/todo-list";

function App() {
  return (
    <div className="container grid place-items-center mx-auto h-screen font-semibold">
      <div className="p-8 flex w-full gap-10">
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
