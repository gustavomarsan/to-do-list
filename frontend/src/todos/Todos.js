import Todo from "./Todo";
import Input from "../utils/Input";
import { useEffect, useState } from "react";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const createTodo = async () => {
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

        setTodos([...todos, newTodoResponse])
        setNewTodo("")
    }

    const fetchTodos = async () => {
        const response = await fetch("http://localhost:8000/todo/")
        const todos = await response.json()
        setTodos(todos)
    }

    useEffect(() => {
        fetchTodos()
    }
        , [])

    return (
        <>
            <Input value={newTodo} setValue={setNewTodo} buttons={[
                <button className="btn btn-primary" onClick={createTodo}>Save</button>
            ]} />
            <ul className="list-group list-group-flush">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item">
                        <Todo todo={todo} onDelete={fetchTodos} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
