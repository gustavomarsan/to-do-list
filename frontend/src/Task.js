function Task({ task }) {
    return (
        <div>
            <input id={`task-${task.id}`} type="checkbox" checked={task.done} />
            <label for={`task-${task.id}`}>{task.title}</label>
        </div>
    )
}

export default Task;