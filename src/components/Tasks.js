import Task from './Task'

function Tasks({ tasks, onToggle, onDelete }) {
    return (
        <>
          {tasks.map((task) => (
              <Task key={task._id} task={task} onToggle={onToggle} onDelete={onDelete} />
            ))}  
        </>
    )
}

export default Tasks
