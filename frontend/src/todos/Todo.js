import { useState } from "react";
import CheckBox from "../utils/CheckBox";
import Input from "../utils/Input";

const Todo = ({ todo, onDelete }) => {
    const [title, setTitle] = useState(todo.title);
    const [newTitle, setNewTitle] = useState(todo.title);
    const [done, setDone] = useState(todo.done);
    const [editing, setEditing] = useState(false);

    const updateTodo = async (title, done) => {
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

    const deleteTodo = async () => {
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

    const editingTodo = (
        <>
            <Input value={newTitle} setValue={setNewTitle} buttons={[
                <button className="btn btn-primary" onClick={() => updateTodo(newTitle, done)}>Save</button>,
                <button className="btn btn-danger" onClick={() => { setEditing(false); setNewTitle(title) }}>Cancel</button>
            ]} />
        </>
    );

    const todoElements = (
        <div className="d-flex justify-content-between">
            <CheckBox label={title} value={done} setValue={(done) => updateTodo(title, done)} />
            <div className="btn-group">
                <button className="btn btn-secondary" onClick={() => setEditing(true)}>Edit</button>
                <button className="btn btn-danger" onClick={deleteTodo}>Delete</button>
            </div>
        </div>
    );

    return editing ? editingTodo : todoElements;
}

export default Todo;