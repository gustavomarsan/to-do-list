import Todo from "./Todo";
import TextBox from "./utils/TextBox";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  async function createTodo() {
    const response = await fetch("http://localhost:8000/todo/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: newTodo })
    })

    if (response.status !== 201) {
      console.log("Error creating todo")
      return
    }
    const newTodoResponse = await response.json()
    console.log(newTodoResponse)

    setTodos([...todos, newTodoResponse])
    setNewTodo("")
  }

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch("http://localhost:8000/todo/")
      const todos = await response.json()
      console.log(todos)
      setTodos(todos)
    }
    fetchTodos()
  }
    , [])

  return (
    <div>
      <header>
        The TODO App
      </header>
      <TextBox value={newTodo} setValue={setNewTodo} />
      <button onClick={createTodo}>Save</button>
      {todos.map((todo) => (
        <Todo key={todo.id} task={todo} />
      ))}
    </div>
  );
}

export default App;
