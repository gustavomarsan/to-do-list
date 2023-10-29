import Todo from "./Todo";
function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  async function createTodo() {
    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: newTodo })
    })
    const newTodoResponse = await response.json()

    setTodos([...todos, newTodoResponse])
    setNewTodo("")
  }

  return (
    <div>
      <header>
        The TODO App
      </header>
      <TextBox value={newTodo} onChange={setNewTodo} />
      <button onClick={createTodo}>Save</button>
      {todos.map((todo) => (
        <Todo task={todo} />
      ))}
    </div>
  );
}

export default App;
