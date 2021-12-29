import './Task.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Task({ task, onToggle, onDelete }) {
    console.log(task)
    return (
        <div className='task-box--rounded'>
            <input className='check-box--large' type='checkbox' checked={task.complete} onChange={() => onToggle(task.id)}/>
            <div className='task-content'>
                <div className='task-title'>{task.title}</div>
                <div className='task-description'>{task.text}</div>
            </div>
            <FontAwesomeIcon icon={faTrashAlt} style={{color:'#FF0000'}} size='sm' onClick={() => onDelete(task.id)} />
        </div>
    );
}

export default Task;