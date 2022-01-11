import './Task.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Task({ task, onToggle, onDelete }) {
    return (
        <div className='task-box--rounded'>
            <input className='check-box--large' type='checkbox' checked={task.complete} onChange={() => onToggle(task._id, task.complete)}/>
            <div className='task-content'>
                <div className='task-title'>{task.taskTitle}</div>
                <div className='task-description'>{task.taskInfo}</div>
            </div>
            <FontAwesomeIcon icon={faTrashAlt} style={{color:'#FF0000'}} size='sm' onClick={() => onDelete(task._id)} />
        </div>
    );
}

export default Task;