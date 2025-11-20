import AddTodo from "./components/todo/AddTodo";
import TodoList from "./components/todo/TodoList";

const App = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
