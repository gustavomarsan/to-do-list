import { useState } from "react";
import CheckBox from "../utils/CheckBox";
import Input from "../utils/Input";

function Todo({ todo, onDelete }) {
    const [title, setTitle] = useState(todo.title);
    const [newTitle, setNewTitle] = useState(todo.title);
    const [done, setDone] = useState(todo.done);
    const [editing, setEditing] = useState(false);

    async function updateTodo(title, done) {
        const response = await fetch(`http://localhost:8000/todo/${todo.id}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, done })
        })
        if (response.status !== 200) {
            console.log("Error updating todo")
            return
        }
        const updatedTodo = await response.json()
        setTitle(updatedTodo.title)
        setDone(updatedTodo.done)
        setEditing(false)
    }

    async function deleteTodo() {
        const response = await fetch(`http://localhost:8000/todo/${todo.id}/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.status !== 204) {
            console.log("Error deleting todo")
            return
        }
        onDelete()
    }

    return (
        <>
            {editing ? (
                <>
                    <Input value={newTitle} setValue={setNewTitle} />
                    <button onClick={() => updateTodo(newTitle, done)}>Save</button>
                    <button onClick={() => { setEditing(false); setNewTitle(title) }}>Cancel</button>
                </>
            ) : (
                <>
                    <CheckBox label={title} value={done} setValue={(done) => updateTodo(title, done)} />
                    <button onClick={() => setEditing(true)}>Edit</button>
                    <button onClick={deleteTodo}>Delete</button>
                </>
            )}

        </>
    )
}

export default Todo;