function Todo({ task: todo }) {
    return (
        <div>
            <input id={`task-${todo.id}`} type="checkbox" checked={todo.done} />
            <label for={`task-${todo.id}`}>{todo.title}</label>
        </div>
    )
}

export default Todo;