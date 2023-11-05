import { useState, useEffect } from "react";
import CheckBox from "./utils/CheckBox";

function Todo({ todo: todo }) {
    const [title, setTitle] = useState(todo.title);
    const [done, setDone] = useState(todo.done);
    
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
    }


    return (
        <div>
            <CheckBox label={title} value={done} setValue={() => updateTodo(title, !done)} />
        </div>
    )
}

export default Todo;