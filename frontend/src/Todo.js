function Todo({ task: todo }) {
    return (
        <div>
            <input id={`task-${todo.id}`} type="checkbox" checked={todo.done} />
            <label htmlFor={`task-${todo.id}`}>{todo.title}</label>
        </div>
    )
}

export default Todo;